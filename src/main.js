import Vue from 'vue'
import App from './App.vue'
import store from '@/components/store/store'
import router from '@/router/router.js'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


export default new Vuetify({
  icons: {
    iconfont: 'mdi', 
  },
})
