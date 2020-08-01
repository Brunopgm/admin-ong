<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app dark>
      <Menu/>
  </v-navigation-drawer>
  
     <v-app-bar
      app
      color="grey darken-3"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

  <v-main>
    <v-container fluid>
      <router-view>
        <!-- home - / -->
        <!-- Header - /cabecalho -->
        <!-- Home - /home -->
      </router-view>
    </v-container>
  </v-main>

  <v-footer app/>

</v-app>
</template>

<script>
import Menu from './components/Menu.vue';


export default {
  data(){
    return{
      drawer: null,
    }
  },
  components: {
    Menu,
  }
}
</script>

