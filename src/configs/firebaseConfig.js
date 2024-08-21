import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  piKey: "AIzaSyAWepouOsz_UtiEPBzDDDNkHuU-DBaNlNE",
  authDomain: "elysian-mind.firebaseapp.com",
  projectId: "elysian-mind",
  storageBucket: "elysian-mind.appspot.com",
  messagingSenderId: "199646453055",
  appId: "1:199646453055:web:4dd9397c842ae6b6f7878a",
  measurementId: "G-VWCFHYGPSV"
};



const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);




