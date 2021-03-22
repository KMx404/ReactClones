import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIGpnhJr2OlhSYa7ethhonc-OTW9VhoVA",
    authDomain: "clone-1e5f0.firebaseapp.com",
    databaseURL: "https://clone-1e5f0.firebaseio.com",
    projectId: "clone-1e5f0",
    storageBucket: "clone-1e5f0.appspot.com",
    messagingSenderId: "706546941030",
    appId: "1:706546941030:web:c9e4fb6a540b21ce23c1a7",
    measurementId: "G-JSF4K0QH4G"
});

const auth = firebase.auth();

export { auth };