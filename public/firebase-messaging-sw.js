// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAcoNrGFEnv-Mp92DvEp7Q1S9KKCi9R0Ok",
  authDomain: "kertas-putih.firebaseapp.com",
  projectId: "kertas-putih",
  storageBucket: "kertas-putih.appspot.com",
  messagingSenderId: "966320458850",
  appId: "1:966320458850:web:39cff37304a4b07c00953b"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
  
//   self.registration.showNotification(notificationTitle, notificationOptions);
});

// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });
