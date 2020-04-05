import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import firebase from "firebase/app"


Vue.prototype.axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA47L2kFZqoUw3S7Fu14Ng50HnENWqc318",
    authDomain: "bai-projekt.firebaseapp.com",
    databaseURL: "https://bai-projekt.firebaseio.com",
    projectId: "bai-projekt",
    storageBucket: "bai-projekt.appspot.com",
    messagingSenderId: "699414765568",
    appId: "1:699414765568:web:4c38e497da9619ad3778e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if (!app) {
        app = new Vue({
                router,
                store,
                render: h => h(App)
            }).$mount('#app')
    }
})


