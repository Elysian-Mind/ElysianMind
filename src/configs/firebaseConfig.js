import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD63IFfB1MqeGcXbs9cXMRKJOZMfP3wZ6E",
  authDomain: "elysian-9eed1.firebaseapp.com",
  projectId: "elysian-9eed1",
  storageBucket: "elysian-9eed1.appspot.com",
  messagingSenderId: "178628130756",
  appId: "1:178628130756:web:483515e2770b865a7e5691",
  measurementId: "G-3XWTNF8L66"
};



const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);




