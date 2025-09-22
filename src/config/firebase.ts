import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and later, measurementId is optional
const firebaseConfig = {
  // You'll need to replace these with your actual Firebase config values
  // Get these from your Firebase Console -> Project Settings -> General -> Your apps
  apiKey: "AIzaSyDPoerWlAwSnN-if8vRzFTMb4d453-jf6M",
  authDomain: "angle-lake-manor.firebaseapp.com",
  projectId: "angle-lake-manor",
  storageBucket: "angle-lake-manor.firebasestorage.app",
  messagingSenderId: "404576918130",
  appId: "1:404576918130:web:06279c5d9e0d296e85c0eb",
  measurementId: "G-9G39X69NEY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export default app
