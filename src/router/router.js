import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import Login from '@/components/Login.vue'

import Header from "@/components/header/Header.vue"
import Footer from "@/components/footer/Footer.vue"

import Institution from "@/components/page-body/institution/Institution.vue"
import Galeria from "@/components/page-body/galeria/Galeria.vue"
import Projects from "@/components/page-body/projects/Projects.vue"
import ContactAndForm from "@/components/page-body/contactAndForm/ContactAndForm.vue"

import FirebaseApp from "@/firebaseConfig"


Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",     
      name: "home",
      component: Home,
      meta: {requiresAuth: true}
    },
    {
      path: "/login",     
      name: "login",
      component: Login,
    },
    {
      path: "/cabecalho",     
      name: "header",
      component:Header,
      meta: {requiresAuth: true}
    },
    {
      path: "/rodape",     
      name: "footer",
      component: Footer,
      meta: {requiresAuth: true}
    },
    {
      path: "/instituição",     
      name: "institution",
      component: Institution,
      meta: {requiresAuth: true}
    },
    {
      path: "/galeria",     
      name: "galeria",
      component: Galeria,
      meta: {requiresAuth: true}
    },
    {
      path: "/projects",     
      name: "projects",
      component: Projects,
      meta: {requiresAuth: true}
    },
    {
      path: "/contactAndForm",     
      name: "contactAndForm",
      component: ContactAndForm,
      meta: {requiresAuth: true}
    }
  ]
});


router.beforeEach((to, from, next)=>{
  const user = FirebaseApp.auth().currentUser
  if (to.meta.requiresAuth) {
    to.name != 'login' & !user ? next({name: 'login'}):next()
  } else {
    next()
  }
})

export default router