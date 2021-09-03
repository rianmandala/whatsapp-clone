import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCG76lY8SdZaU3_eMijX4wTsMDaDhccp48",
    authDomain: "whatsapp-clone-bbf79.firebaseapp.com",
    projectId: "whatsapp-clone-bbf79",
    storageBucket: "whatsapp-clone-bbf79.appspot.com",
    messagingSenderId: "270397991461",
    appId: "1:270397991461:web:25298117f42464ff892dcc"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = app.auth()

export {db}