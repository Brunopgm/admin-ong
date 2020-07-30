import Vue from "vue"
import Router from "vue-router"
import Hello from "@/components/HelloWorld.vue"
import Home from "@/components/Home.vue"

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",     // caminho 
      component: Hello
    },
    {
      path: "/home",     
      name: "Home",
      component: Home
    }
    
  ]
});

export default router