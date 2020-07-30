<template>
    <div class="menu">

    <v-btn
        @click="drawer = !drawer"
        class="ma-2 button-menu"
        label="v-model"
    >Menu</v-btn>

   
  


      <v-navigation-drawer 
        
        
        v-model="drawer"
        :permanent="permanent"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://i.pinimg.com/originals/bf/d8/67/bfd867d85dcf30b0de9844cd9a0f156e.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Ong Próximo</v-list-item-title>
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



      </div>
    
 
</template>

<script>
    export default {
        
        data () {
        return {
            width: screen.width,
            drawer: true,
            permanent: false,   
            items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
            ],
          }
        }
    }
</script>

<style scoped>
  
  @media(min-width: 960px){
    .button-menu{
      display: none;
    }
    .menu{
      width: 350px;
    }
  }
</style>



