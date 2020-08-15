import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAl5T278s2eV48Bts9HwFH5rmMllf8T194',
  authDomain: 'chat-bot-app-4fc13.firebaseapp.com',
  databaseURL: 'https://chat-bot-app-4fc13.firebaseio.com',
  projectId: 'chat-bot-app-4fc13',
  storageBucket: 'chat-bot-app-4fc13.appspot.com',
  messagingSenderId: '105448296066',
  appId: '1:105448296066:web:f374de66d7b5f0d5316e9b',
  measurementId: 'G-0QLBGJKDY9',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
