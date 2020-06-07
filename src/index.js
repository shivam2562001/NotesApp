import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase=require('firebase');
require('firebase/firestore');
 
  firebase.initializeApp( {
    apiKey: "AIzaSyB-Dt2vyyRpxiVtxBTri_OvjBTv-FPcAGw",
    authDomain: "evernote-clone-54e8d.firebaseapp.com",
    databaseURL: "https://evernote-clone-54e8d.firebaseio.com",
    projectId: "evernote-clone-54e8d",
    storageBucket: "evernote-clone-54e8d.appspot.com",
    messagingSenderId: "254008925748",
    appId: "1:254008925748:web:4cd03886e5a44e598bf461",
    measurementId: "G-982T96DFZD"
  });

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
