import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVD5JYm12jV7-TjVzW4vjbh3aieHMgChQ",
    authDomain: "dev-chat-58672.firebaseapp.com",
    projectId: "dev-chat-58672",
    storageBucket: "dev-chat-58672.appspot.com",
    messagingSenderId: "211667763536",
    appId: "1:211667763536:web:17fe8c9858c8b962cdec55",
    measurementId: "G-RZC7BZSH7Z"
  };

  let app;
  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  } else{
      app = firebase.app()
  }
  const db = app.firestore();
  const auth = firebase.auth();
  export {db, auth};
  export default firebaseConfig;