// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdVhtLyEBsdcTPb-AnylTlzeKK8GVop-U",
  authDomain: "proyecto1-react-native.firebaseapp.com",
  projectId: "proyecto1-react-native",
  storageBucket: "proyecto1-react-native.appspot.com",
  messagingSenderId: "957254103188",
  appId: "1:957254103188:web:80e7f7b6c54c70131dc481"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}; 
