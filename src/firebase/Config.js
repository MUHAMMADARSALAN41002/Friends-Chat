// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyDQp608RkTeJaGF3W-PFXA4Ijxtrvj8Al4",
//     authDomain: "friends-chat-ae6c6.firebaseapp.com",
//     projectId: "friends-chat-ae6c6",
//     storageBucket: "friends-chat-ae6c6.appspot.com",
//     messagingSenderId: "66764956039",
//     appId: "1:66764956039:web:039a114fe171f638d0b322",
//     measurementId: "G-FBPRTH11G8"
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);

// const auth = getAuth(app);

// export {auth, storage};


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig ={
    apiKey: "AIzaSyDQp608RkTeJaGF3W-PFXA4Ijxtrvj8Al4",
    authDomain: "friends-chat-ae6c6.firebaseapp.com",
    projectId: "friends-chat-ae6c6",
    storageBucket: "friends-chat-ae6c6.appspot.com",
    messagingSenderId: "66764956039",
    appId: "1:66764956039:web:039a114fe171f638d0b322",
    measurementId: "G-FBPRTH11G8"
};

// firebase.initializeApp(firebaseConfig)
// const storage = firebase.storage()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;
const storage = getStorage(app);


export { firebaseConfig, auth,storage, db, stateChange }