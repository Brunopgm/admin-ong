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

    <v-main class="main">
        <router-view/>
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

<style>
.body, html{
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.main{
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
</style>
