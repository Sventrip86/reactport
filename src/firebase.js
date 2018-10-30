import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD45HlNOxUOgRdj5knpF0A1WF-QAV8bEpw",
  authDomain: "forms-test-59d10.firebaseapp.com",
  databaseURL: "https://forms-test-59d10.firebaseio.com",
  projectId: "forms-test-59d10",
  storageBucket: "forms-test-59d10.appspot.com",
  messagingSenderId: "754521551832"
};


  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  const googleAuth = new firebase.auth.GoogleAuthProvider();

  export {
    firebase,
    firebaseDB,
    googleAuth
  }
