import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"

import Header from "@/components/header/Header.vue"
import Footer from "@/components/footer/Footer.vue"

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
    }
  ]
});

export default router