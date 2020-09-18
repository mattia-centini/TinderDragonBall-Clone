import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCV6vu4EOGw0woUPhQ2mjF_FS5Zo_l0O4o",
  authDomain: "tinder-clone-react-1c49e.firebaseapp.com",
  databaseURL: "https://tinder-clone-react-1c49e.firebaseio.com",
  projectId: "tinder-clone-react-1c49e",
  storageBucket: "tinder-clone-react-1c49e.appspot.com",
  messagingSenderId: "775559108775",
  appId: "1:775559108775:web:703afb84331d13a9772382",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
