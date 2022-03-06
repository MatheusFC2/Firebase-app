import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyDkin8zEQ9bZEfyT8BzCZXbXcBO7odWRkY",
  
    authDomain: "fir-app-f1c2a.firebaseapp.com",
  
    projectId: "fir-app-f1c2a",
  
    storageBucket: "fir-app-f1c2a.appspot.com",
  
    messagingSenderId: "226135321365",
  
    appId: "1:226135321365:web:e45f854e9489c19a1b971c"
  
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);