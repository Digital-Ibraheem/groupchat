import firebase from 'firebase'
// importing firebase so we can use it's commands

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt2HMWXHf_NJcWyTqRr-YrsHGG0Ts8AnU",
    authDomain: "groupchat-53a8a.firebaseapp.com",
    projectId: "groupchat-53a8a",
    storageBucket: "groupchat-53a8a.appspot.com",
    messagingSenderId: "892125223366",
    appId: "1:892125223366:web:6e67924e5a42ced865bac7",
    measurementId: "G-64QB9675W2"
})
// this is the code that links our firebase database with our React app

const db = firebaseApp.firestore()
// this line of code accesses our database, called firestore

const auth = firebase.auth()
// this accesses the authentication tab in firebase

export { db, auth }
// exporting the database accesser and the authentication accesser