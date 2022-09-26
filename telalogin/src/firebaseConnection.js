import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyB7jwu1bBArtCo0yAe8rq3Yvw9KaLGyZ8k",
    authDomain: "paginalogin-cc86c.firebaseapp.com",
    projectId: "paginalogin-cc86c",
    storageBucket: "paginalogin-cc86c.appspot.com",
    messagingSenderId: "583085697975",
    appId: "1:583085697975:web:9b31b288a0d535a08cd632",
    measurementId: "G-2KXT63096T"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;