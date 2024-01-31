import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

//initialize firestore
const firebaseConfig = {
    apiKey: "AIzaSyAzbrEgUEwwGX9p9C8cC5WaL2elQGjHxl0",
    authDomain: "eeva2024-f31cf.firebaseapp.com",
    projectId: "eeva2024-f31cf",
    storageBucket: "eeva2024-f31cf.appspot.com",
    messagingSenderId: "261762964006",
    appId: "1:261762964006:web:c39a93fb1031150b6424e7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //initializeApp(firebaseConfig)
  const firestore = getFirestore();
  
  export{
    firestore
  };