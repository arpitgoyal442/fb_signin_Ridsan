import Vue from 'vue'
import App from './App.vue'

// *** Firebase importing Stuff Start
import * as  firebase from "firebase/app"
import firebaseConfig from './firebasedata';
//Firebase Importing Stuff Done

firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  
  
}).$mount('#app')
