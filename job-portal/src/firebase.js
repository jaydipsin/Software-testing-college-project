import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjfB0zzl40cT8nyT-WMznuj8V2LlKg4_E",
  authDomain: "job-portal-clg.firebaseapp.com",
  projectId: "job-portal-clg",
  storageBucket: "job-portal-clg.firebasestorage.app",
  messagingSenderId: "1006350173443",
  appId: "1:1006350173443:web:e5181828692c0fc3e3d536",
  measurementId: "G-9KLY3KE8CD"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if(getApps().length > 0){
    console.log("Firebase Initialized" , app.name);
}
else{
    console.log("Firebase is not Initialized." , app.name)
}