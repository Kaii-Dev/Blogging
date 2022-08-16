import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {}
const firebaseConfig = {
  apiKey: "AIzaSyAe2s-wJIO8A0WXq_M0Zp9VccHmOWPH8EI",
  authDomain: "mokey-blogging-5e191.firebaseapp.com",
  projectId: "mokey-blogging-5e191",
  storageBucket: "mokey-blogging-5e191.appspot.com",
  messagingSenderId: "682670806169",
  appId: "1:682670806169:web:ae0b31e9c21baac1c89408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = 