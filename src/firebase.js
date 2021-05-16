import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBptybgNmRdn_cPbp7vPLXojdetD4Zk22o",
  authDomain: "whatsappclone-a961f.firebaseapp.com",
  databaseURL: "https://whatsappclone-a961f-default-rtdb.firebaseio.com",
  projectId: "whatsappclone-a961f",
  storageBucket: "whatsappclone-a961f.appspot.com",
  messagingSenderId: "266558297335",
  appId: "1:266558297335:web:8e897a32ddd4fb9b5eeff2",
  measurementId: "G-CN5Z9JREVK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
