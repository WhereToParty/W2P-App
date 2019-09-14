import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFli9oMizfawMcvVlhOilLEpmNtECQpY8",
    authDomain: "where-2-party.firebaseapp.com",
    databaseURL: "https://where-2-party.firebaseio.com",
    projectId: "where-2-party",
    storageBucket: "",
    messagingSenderId: "686837040712",
    appId: "1:686837040712:web:15268185f20b9c71e97a7d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
