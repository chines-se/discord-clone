// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCD12rCJ1g2KJgpt3FNgxX2J7OntIRYnTo",
    authDomain: "discord-clone-5f2ee.firebaseapp.com",
    projectId: "discord-clone-5f2ee",
    storageBucket: "discord-clone-5f2ee.appspot.com",
    messagingSenderId: "1069719676130",
    appId: "1:1069719676130:web:1fe48087cbbbff5438eabb",
    measurementId: "G-VV8WJ4YK5K"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
