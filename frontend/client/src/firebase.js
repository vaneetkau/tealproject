import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyChOFFeGifKsnwZ8f6cJudDMIbuAKFETDk",
    authDomain: "loanease-48a00.firebaseapp.com",
    projectId: "loanease-48a00",
    storageBucket: "loanease-48a00.appspot.com",
    messagingSenderId: "95963479335",
    appId: "1:95963479335:web:0008c6605472cac642fd02",
    measurementId: "G-R11XYTNF01",
    databaseURL: "https://loanease-48a00-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig);