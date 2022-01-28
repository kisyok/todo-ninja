// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC0xydc-S-2Izk-io0E_e5f_aaiEZ499i4",
//   authDomain: "todo-ninja-9e25e.firebaseapp.com",
//   projectId: "todo-ninja-9e25e",
//   storageBucket: "todo-ninja-9e25e.appspot.com",
//   messagingSenderId: "517999533553",
//   appId: "1:517999533553:web:3be2cf1a25171550173850",
//   measurementId: "G-2LPD1R2D5S"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const db = getFirestore();
// // db.settings({ timestampsInSnapshots: true });

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0xydc-S-2Izk-io0E_e5f_aaiEZ499i4",
    authDomain: "todo-ninja-9e25e.firebaseapp.com",
    projectId: "todo-ninja-9e25e",
    storageBucket: "todo-ninja-9e25e.appspot.com",
    messagingSenderId: "517999533553",
    appId: "1:517999533553:web:3be2cf1a25171550173850",
    measurementId: "G-2LPD1R2D5S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// import firebase from 'firebase/app'
// import 'firebase/firestore'

// // Get a Firestore instance
// export const db = firebase.initializeApp({ projectId: '82YBpHliJJOi4Nmp0Rkj' }).firestore()

// // Export types that exists in Firestore
// // This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })