import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"

import Header from "@/components/header/Header.vue"
import Footer from "@/components/footer/Footer.vue"

import Page1 from "@/components/page-body/page-1.vue"
import Page2 from "@/components/page-body/page-2.vue"
import Page3 from "@/components/page-body/page-3.vue"
import Page4 from "@/components/page-body/page-4/page-4.vue"
import Page5 from "@/components/page-body/page-5.vue"

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
      path: "/page-1",     
      name: "page-1",
      component: Page1
    },
    {
      path: "/page-2",     
      name: "page-2",
      component: Page2
    },
    {
      path: "/page-3",     
      name: "page-3",
      component: Page3
    },
    {
      path: "/page-4",     
      name: "page-4",
      component: Page4
    },
    {
      path: "/page-5",     
      name: "page-5",
      component: Page5
    }
  ]
});

export default router