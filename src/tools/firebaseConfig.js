// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0FKG6DsgckeY-6UFqNDij3A9KxKytxbM",
  authDomain: "filmfeed-2022.firebaseapp.com",
  databaseURL: "https://filmfeed-2022-default-rtdb.firebaseio.com",
  projectId: "filmfeed-2022",
  storageBucket: "filmfeed-2022.appspot.com",
  messagingSenderId: "967870380405",
  appId: "1:967870380405:web:9ddbced0ee7b04a54ffb3c",
  measurementId: "G-344VD2XYWM"
};

// Initialize Firebase
// let ffFirebase;
// ffFirebase = require('firebase/database');
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

let db = firebase.database();

export default db;