import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzTuW1MA00VNV_-BFg33tdvtW_fNaliYk",
  authDomain: "iquire.io",
  projectId: "dulcet-order-370109",
  storageBucket: "dulcet-order-370109.appspot.com",
  messagingSenderId: "431145032434",
  appId: "1:431145032434:web:dca2b9edb323d4d4d70e6b",
  measurementId: "G-F2GGR3DL2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
  auth
}