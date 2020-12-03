import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"

import Header from "@/components/header/Header.vue"
import Footer from "@/components/footer/Footer.vue"

import Institution from "@/components/page-body/institution/Institution.vue"
import Galeria from "@/components/page-body/galeria/Galeria.vue"
import Projects from "@/components/page-body/projects/Projects.vue"
import ContactAndForm from "@/components/page-body/contactAndForm/ContactAndForm.vue"

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",     
      name: "home",
      component: Home
    },
    {
      path: "/cabecalho",     
      name: "header",
      component:Header,
    },
    {
      path: "/rodape",     
      name: "footer",
      component: Footer
    },
    {
      path: "/instituição",     
      name: "institution",
      component: Institution
    },
    {
      path: "/galeria",     
      name: "galeria",
      component: Galeria
    },
    {
      path: "/projects",     
      name: "projects",
      component: Projects
    },
    {
      path: "/contactAndForm",     
      name: "contactAndForm",
      component: ContactAndForm
    }
  ]
});

export default router