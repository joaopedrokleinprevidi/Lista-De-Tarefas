
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVslPqKvhdmiJmR9Fh3phikfAudJD4hfE",
  authDomain: "maximum-list.firebaseapp.com",
  projectId: "maximum-list",
  storageBucket: "maximum-list.appspot.com",
  messagingSenderId: "907913753087",
  appId: "1:907913753087:web:7b72cf935acbea55d0b7ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;