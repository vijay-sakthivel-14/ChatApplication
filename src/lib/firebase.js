import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXjKQdzMaWyWPq6vgIPVjqyD93PhwPqlA",
  authDomain: "reactchat-65e07.firebaseapp.com",
  projectId: "reactchat-65e07",
  storageBucket: "reactchat-65e07.appspot.com",
  messagingSenderId: "562713912792",
  appId: "1:562713912792:web:20bee6bd140dabe0ff7ead"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
