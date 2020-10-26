import Vue from 'vue'
import Vuex from 'vuex'
import listFieldsMenu from './modules/listFieldsMenu'
import footerListUrlImage from './modules/footerListUrlImage'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {listFieldsMenu, footerListUrlImage}
})