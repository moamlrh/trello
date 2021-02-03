import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUs6cXK91gXSzo92jrBV0ZXZ3pLkHpRkw",
    authDomain: "trell0.firebaseapp.com",
    projectId: "trell0",
    storageBucket: "trell0.appspot.com",
    messagingSenderId: "440097219181",
    appId: "1:440097219181:web:f407b5e66692b73ce79564"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence()
const database = firebase.database();

export {
    database,
};

export default firebase;