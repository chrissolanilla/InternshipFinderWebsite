var firebaseConfig = {
    apiKey: "AIzaSyD3uOK9dhNN_yV9Src3FHQoKFPIuqxzu8g",
    authDomain: "easy-intern.firebaseapp.com",
    projectId: "easy-intern",
    storageBucket: "easy-intern.appspot.com",
    messagingSenderId: "1032116527504",
    appId: "1:1032116527504:web:7bb7fab99a11d5fae29315",
    measurementId: "G-XMR4VMND5T"
};
 // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();