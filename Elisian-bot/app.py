from flask import Flask, request, jsonify, render_template
import os
import pandas as pd
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
from flask_cors import CORS
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
app = Flask(__name__)
CORS(app)

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key from environment variables
google_api_key = os.getenv("GOOGLE_API_KEY")
if not google_api_key:
    raise ValueError("GOOGLE_API_KEY not found in environment variables")

# Initialize models
try:
    llm = ChatGoogleGenerativeAI(model="gemini-pro", api_key=google_api_key)
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", api_key=google_api_key)
except Exception as e:
    raise ValueError(f"Error initializing models: {e}")

# Load the CSV file with a specified encoding
file_path = "train.csv"
if not os.path.exists(file_path):
    raise FileNotFoundError(f"File not found: {file_path}")

try:
    # Inspecting the CSV file with pandas
    df = pd.read_csv(file_path, encoding='utf-8')
    print(df.head())  # Print the first few rows for inspection

    # Load the CSV with the specified encoding using CSVLoader
    csv_loader = CSVLoader(file_path, encoding='utf-8')
    docs = csv_loader.load()
    print(f"Loaded {len(docs)} documents from {file_path}")
except Exception as e:
    raise ValueError(f"Error loading CSV file: {e}")

# Chunking or Text Splitting
try:
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=512,
        chunk_overlap=0
    )
    chunks = text_splitter.split_documents(docs)
    print(f"Split documents into {len(chunks)} chunks")
except Exception as e:
    raise ValueError(f"Error splitting documents: {e}")

# Initialize VectorDB and Retriever
persist_directory = "./chroma"  # Specify a directory for Chroma to persist data

def add_documents_in_batches(vectorstore, documents, batch_size):
    for i in range(0, len(documents), batch_size):
        batch = documents[i:i + batch_size]
        vectorstore.add_documents(batch)
    vectorstore.persist()

try:
    vectordb = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
    add_documents_in_batches(vectordb, chunks, batch_size=5000)  # Adjust batch size if needed
    print(f"VectorDB initialized and persisted at {persist_directory}")
except Exception as e:
    raise ValueError(f"Error initializing VectorDB: {e}")

# Configure Chroma as a retriever with top_k=5
try:
    retriever = vectordb.as_retriever(search_kwargs={"k": 5})
    print("Retriever configured with top_k=5")
except Exception as e:
    raise ValueError(f"Error configuring retriever: {e}")

template = """
You are a therapist AI called Elysian, based in Kenya. 
Your role is to provide empathetic, supportive, and insightful responses to individuals seeking guidance or assistance with their emotional well-being. 
Don't hallucinate by giving responses on topics the client hasn't talked about or adding personas that aren't there.
Context: {context}
Input: {input}
"""

try:
    prompt = PromptTemplate.from_template(template)
    combine_docs_chain = create_stuff_documents_chain(llm, prompt)
    retrieval_chain = create_retrieval_chain(retriever, combine_docs_chain)
    print("Retrieval chain successfully created")
except Exception as e:
    raise ValueError(f"Error creating retrieval chain: {e}")

def handle_user_input(user_input):
    try:
        response = retrieval_chain.invoke({"input": user_input})
        return response.get('answer', 'No answer found')
    except Exception as e:
        print(f"Original error: {str(e)}")
        raise ValueError(f"Error handling user input: {str(e)}")


@app.route('/chat', methods=['POST'])
def chat():
    if not request.is_json:
        return jsonify({'error': 'Request must be JSON'}), 400
    
    data = request.get_json()
    print(f"Received JSON data: {data}")
    
    user_input = data.get('message')
    
    if not user_input:
        return jsonify({'error': 'No message provided'}), 400

    try:
        response = handle_user_input(user_input)
        return jsonify({'response': response})
    except ValueError as ve:
        print(f"ValueError in chat request: {str(ve)}")
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        print(f"Unexpected error in chat request: {str(e)}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

@app.route('/')
def index():
    return "Welcome to the AI Therapist Service!"

if __name__ == "__main__":
    app.run(debug=True)
