import Vue from 'vue'
import App from './App.vue'
import store from '@/components/store/store'
import router from '@/router/router.js'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'
import FirebaseApp from './firebaseConfig';

Vue.use(vuetify)
Vue.config.productionTip = false


let app;
const init = () => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
     new Vuetify({
      icons: {
        iconfont: 'mdi', 
      },
    })
  }
};

FirebaseApp.auth().onAuthStateChanged(async () => {
  init()
});