import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import vuetify from './plugins/vuetify';
// import * as admin from 'firebase-admin'

Vue.config.productionTip = false
// var serviceAccount = require("../ong-proximo-firebase-adminsdk-dsdwf-dfb83fe7e5.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // databaseURL: "https://ong-proximo.firebaseio.com"
// });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration

// </script>