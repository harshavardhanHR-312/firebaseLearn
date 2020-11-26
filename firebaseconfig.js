import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAW_1opMLd3mYwOyzhPIm52sdpUMHEenIE",
  authDomain: "reactnativelearn-38136.firebaseapp.com",
  databaseURL: "https://reactnativelearn-38136.firebaseio.com",
  projectId: "reactnativelearn-38136",
  storageBucket: "reactnativelearn-38136.appspot.com",
  messagingSenderId: "776333458442",
  appId: "1:776333458442:web:45de2f00f860eb8e4ef3f3",
  measurementId: "G-M60NGT0R6H",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
