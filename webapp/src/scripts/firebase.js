import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "",
  authDomain: "quizapplication-b81d4.firebaseapp.com",
  databaseURL: "https://quizapplication-b81d4.firebaseio.com",
  projectId: "quizapplication-b81d4",
  storageBucket: "quizapplication-b81d4.appspot.com",
  messagingSenderId: "126218865029",
  appId: "1:126218865029:web:271f4e3a58bf3895df1cec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var analytics = firebase.analytics();
var db=firebase.firestore();
var storage = firebase.storage();

export {firebase, db, storage};