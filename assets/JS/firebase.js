// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGOqRUDdgsQaChFx64sXFuUIDgUoxqxk",
  authDomain: "monet-garden.firebaseapp.com",
  databaseURL: "https://monet-garden.firebaseio.com",
  projectId: "monet-garden",
  storageBucket: "monet-garden.appspot.com",
  messagingSenderId: "692803663657",
  appId: "1:692803663657:web:5abd1938cf7ec9b5252938"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();
