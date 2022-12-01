import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFw09av0YOs-RFO2tXcpIWemk21wuWD-4",
    authDomain: "react-1-3278c.firebaseapp.com",
    projectId: "react-1-3278c",
    storageBucket: "react-1-3278c.appspot.com",
    messagingSenderId: "598389679540",
    appId: "1:598389679540:web:16c96297314b2bcc62fee1"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.auth = firebase.auth() 

 export default firebase