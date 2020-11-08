import Vue from 'vue'
import Vuex from 'vuex'
import listFieldsMenu from './modules/listFieldsMenu'
import footerListUrlImage from './modules/footerListUrlImage'
import page4 from './modules/page4'
import collaborator from './modules/collaborator'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {listFieldsMenu, footerListUrlImage, page4, collaborator}
})