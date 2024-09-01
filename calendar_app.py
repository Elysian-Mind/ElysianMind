from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Database connection function
def connect_to_database():
    conn = sqlite3.connect('patient_bookings.db')
    return conn

# Route to handle appointment bookings
@app.route('/book', methods=['POST'])
def book_appointment():
    data = request.get_json()
    patient_name = data.get('patient_name')
    appointment_date = data.get('appointment_date')
    appointment_time = data.get('appointment_time')
    
    conn = connect_to_database()
    cursor = conn.cursor()
    
    # Insert booking into the database
    cursor.execute('''
        INSERT INTO appointments (patient_name, appointment_date, appointment_time)
        VALUES (?, ?, ?)
    ''', (patient_name, appointment_date, appointment_time))
    
    conn.commit()
    conn.close()
    
    return jsonify({"message": "Appointment booked successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
