import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC0xydc-S-2Izk-io0E_e5f_aaiEZ499i4",
    authDomain: "todo-ninja-9e25e.firebaseapp.com",
    projectId: "todo-ninja-9e25e",
    storageBucket: "todo-ninja-9e25e.appspot.com",
    messagingSenderId: "517999533553",
    appId: "1:517999533553:web:3be2cf1a25171550173850",
    measurementId: "G-2LPD1R2D5S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
