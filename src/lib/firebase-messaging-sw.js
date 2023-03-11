
import { initializeApp } from "firebase/app";
import { getMessaging ,getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcoNrGFEnv-Mp92DvEp7Q1S9KKCi9R0Ok",
  authDomain: "kertas-putih.firebaseapp.com",
  projectId: "kertas-putih",
  storageBucket: "kertas-putih.appspot.com",
  messagingSenderId: "966320458850",
  appId: "1:966320458850:web:39cff37304a4b07c00953b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const requestPermission = (cb) => {
  
  
  Notification.requestPermission().then((permission) => {
    // alert(permission);
    if (permission === 'granted') {
      const messaging = getMessaging(app)
      console.log('Notification permission granted.');

      getToken(messaging,{vapidKey : "BDkoLqmAtG4JFdVYRyJrgfs-XJIRGtUJJtzzggXkST0whvoVCKjMYpCf_Fxn8huJUcQfpuD-FV_JeRk7B0gi8iM"}).then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // console.log("currentToken", currentToken)
            cb(currentToken)
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            cb(null)
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
          return
        });

    } else console.log('Notification permission denied.');
  })
}
