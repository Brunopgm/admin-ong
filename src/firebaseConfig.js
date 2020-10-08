import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAPDNPRgo_EPeU81gLU-wef6cZBqT9gqqo",
    authDomain: "ong-proximo.firebaseapp.com",
    databaseURL: "https://ong-proximo.firebaseio.com",
    projectId: "ong-proximo",
    storageBucket: "gs://ong-proximo.appspot.com/",
    messagingSenderId: "909686451124",
    appId: "1:909686451124:web:80650536657a47b35ae0e1",
    measurementId: "G-W1W35Y9GCR"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const firestore = firebase.firestore();
//   firebase.analytics();

// export default firebase.initializeApp(firebaseConfig);

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// const storageRef = firebase.storage().ref()

// const carroRef = storageRef.child('carroRef/carro.jpg')
// const carroimageRef = storageRef.child('carro.jpg')
// console.log(carroRef.name);
// console.log(carroimageRef.name);

FirebaseApp.db = firestore;
FirebaseApp.db.enablePersistence({ synchronizeTabs: true })

// firebase use firebase-project-iWanna

// firebase projects:list
// npm run build
// firebase deploy

export default FirebaseApp;