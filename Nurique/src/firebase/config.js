import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

    const firebaseConfig = {
        apiKey: "AIzaSyCdH6Pw5DyjLtI86tHB7o5cNCwUKamfs2U",
        authDomain: "makeaton-6f50a.firebaseapp.com",
        projectId: "makeaton-6f50a",
        storageBucket: "makeaton-6f50a.appspot.com",
        messagingSenderId: "719377511436",
        appId: "1:719377511436:web:e64b86ac640b71c6e92a29",
        measurementId: "G-QCGFB71F52"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app}
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
