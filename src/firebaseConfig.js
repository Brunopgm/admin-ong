import firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: "ong-proximo.firebaseapp.com",
    databaseURL: "https://ong-proximo.firebaseio.com",
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: "gs://ong-proximo.appspot.com/",
    messagingSenderId: "909686451124",
    appId: "1:909686451124:web:80650536657a47b35ae0e1",
    measurementId: "G-W1W35Y9GCR"
  };

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

FirebaseApp.db = firestore;
FirebaseApp.db.enablePersistence({ synchronizeTabs: true })

export default FirebaseApp;