import { initializeApp } from 'firebase/app';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAFXFylM1v6wPuc4mhlBplXP7aWHIfXq2g",
  authDomain: "todo-app-b115f.firebaseapp.com",
  databaseURL: "https://todo-app-b115f-default-rtdb.firebaseio.com",
  projectId: "todo-app-b115f",
  storageBucket: "todo-app-b115f.appspot.com",
  messagingSenderId: "1098557090132",
  appId: "1:1098557090132:web:6be64e514b85e749dfc0c1"
};


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);


export const auth = getAuth(firebaseApp);


export const signInWithMail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

  })
  .catch((error) => {

  });




}



export const SignOut = () => {


  auth.signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  })
}

  export default db;

  