import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBImvtXsRPOtCe6rN8NtmEIB74cttT2Ucw",
    authDomain: "comments-list-reactjs.firebaseapp.com",
    projectId: "comments-list-reactjs",
    storageBucket: "comments-list-reactjs.appspot.com",
    messagingSenderId: "1006930769844",
    appId: "1:1006930769844:web:42cca67ef1619b016fa4e1"
  }

  firebase.initializeApp(firebaseConfig)
  
export default firebase