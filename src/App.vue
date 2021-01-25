<template>
  <v-app :class="{'background-login':!showMenu}">
    <v-navigation-drawer 
      v-model="drawer" 
      app 
      dark 
      width="300"
      v-if="showMenu"
      >
        <Menu/>
    </v-navigation-drawer>
    
      <v-app-bar
        app
        color="grey darken-3"
        dark
        v-if="showMenu"
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span class="signOut" @click="signOut">sair</span>
        
      </v-app-bar>

    <v-main id="main">
        <router-view/>
    </v-main>

    <v-footer app/>
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { signOutUser } from './services/foundation/login'
import Menu from './components/Menu.vue';
import FirebaseApp from "@/firebaseConfig"

const { mapGetters, mapActions } = createNamespacedHelpers('login')
export default {
  data(){
    return{
      drawer: null 
      }
  },
  components: {
    Menu,
  },
  computed:{
    ...mapGetters({showMenu:'readShowMenu'}),
    usuario(){
      const user = FirebaseApp.auth().currentUser
      return user
    }
  },
  methods: {
    ...mapActions(['changeShowMenu']),
    signOut(){
      signOutUser()
      this.changeShowMenu(false)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.body, html{
  font-size: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
#main{
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.background-login{
  background-image: url('./assets/background-login.jpg') !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.signOut{
  cursor: pointer;
  margin: 0px 0px 0px auto;
}
@media(min-width: 960px){
  #main{
    margin: 1.7rem;
  }
}
</style>
