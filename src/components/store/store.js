import Vue from 'vue'
import Vuex from 'vuex'
import listFieldsMenu from './modules/listFieldsMenu'
import footerListUrlImage from './modules/footerListUrlImage'
import contactAndForm from './modules/contactAndForm'
import collaborator from './modules/collaborator'
import banner from './modules/banner'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        listFieldsMenu, 
        footerListUrlImage, 
        contactAndForm, 
        collaborator, 
        banner}
})