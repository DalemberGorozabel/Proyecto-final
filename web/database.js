// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFO1E97nQ27tCgVuSZ4CnbXlUZwcfKlfc",
  authDomain: "app1-9fa0f.firebaseapp.com",
  projectId: "app1-9fa0f",
  storageBucket: "app1-9fa0f.appspot.com",
  messagingSenderId: "925376571549",
  appId: "1:925376571549:web:b687e0e6dad3c169554c74"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();