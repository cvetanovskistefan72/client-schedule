import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDN_0SpUIRl1tedWmzo1yChK_eRZ10LFlI",
    authDomain: "client-schedule-48799.firebaseapp.com",
    databaseURL: "https://client-schedule-48799.firebaseio.com",
    projectId: "client-schedule-48799",
    storageBucket: "client-schedule-48799.appspot.com",
    messagingSenderId: "548224808289",
    appId: "1:548224808289:web:89e65b0050b83e7f6ec120",
    measurementId: "G-255KV8Z1SW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})


  export default firebaseConfig;