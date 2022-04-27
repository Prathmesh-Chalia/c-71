import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAcNdhXngiH6b_SyX8-CXJOryreTYswQNo",
  authDomain: "ghjguyiik.firebaseapp.com",
  projectId: "ghjguyiik",
  storageBucket: "ghjguyiik.appspot.com",
  messagingSenderId: "631321813444",
  appId: "1:631321813444:web:e6f59558e36ecdb6968491",
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
