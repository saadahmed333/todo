import { initializeApp } from "firebase/app";
import {
  getFirestore, 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot, } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCndtZQjyofWfTUliCMv1UOlCPChRvL_pk",
  authDomain: "todo-3cbc0.firebaseapp.com",
  projectId: "todo-3cbc0",
  storageBucket: "todo-3cbc0.appspot.com",
  messagingSenderId: "699760091192",
  appId: "1:699760091192:web:b3e31857ce52621479c6cd"
};

const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export {collection,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc,
    doc,
    deleteDoc,
    onSnapshot,}





    // const firebaseConfig = {
  //   apiKey: "AIzaSyCndtZQjyofWfTUliCMv1UOlCPChRvL_pk",
  //   authDomain: "todo-3cbc0.firebaseapp.com",
  //   projectId: "todo-3cbc0",
  //   storageBucket: "todo-3cbc0.appspot.com",
  //   messagingSenderId: "699760091192",
  //   appId: "1:699760091192:web:b3e31857ce52621479c6cd"
  // };