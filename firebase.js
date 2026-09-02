var firebaseConfig = {
  apiKey: "AIzaSyBZ9j9lf8Zo9vCq3_Sp7uqomTb3XKGVVwk",
  authDomain: "magnodoces-c7af7.firebaseapp.com",
  projectId: "magnodoces-c7af7",
  storageBucket: "magnodoces-c7af7.appspot.com",
  messagingSenderId: "76553441552",
  appId: "1:76553441552:web:c17aff981c7ad34aaad595"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db  = firebase.firestore();
