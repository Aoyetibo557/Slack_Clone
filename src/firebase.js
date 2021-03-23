import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAK2o66XNn7Qmqms7AhR87BLFzj2rFLhU",
  authDomain: "slack-clone-c0e20.firebaseapp.com",
  projectId: "slack-clone-c0e20",
  storageBucket: "slack-clone-c0e20.appspot.com",
  messagingSenderId: "175870522496",
  appId: "1:175870522496:web:6fb8523fa3ee4759496265",
  measurementId: "G-F81VV4XTQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; //explicit export - we dont use it in many files

export default db; //default export - we use in multplie files

