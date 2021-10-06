import Vue from 'vue'
import App from './App.vue'

// *** Firebase importing Stuff Start
import * as  firebase from "firebase/app"
//Firebase Importing Stuff Done


// *** Firebase Config Start

const firebaseConfig = {
  apiKey: "AIzaSyBdib52CCjXacWOwiScDaivtPyp4A_wNXM",
  authDomain: "shoponair-5e528.firebaseapp.com",
  projectId: "shoponair-5e528",
  storageBucket: "shoponair-5e528.appspot.com",
  messagingSenderId: "73600692531",
  appId: "1:73600692531:web:436546a1df32e07ac68e46",
  measurementId: "G-0M633VDH31"
};

//Firebase Config Stuff Ends

firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  
  
}).$mount('#app')
