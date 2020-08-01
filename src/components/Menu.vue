<template>
    
      
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/56454602_413481132763174_8387265942979084288_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeG3hpFlA6-EH4dwhSaSF76Tvx69PbHfOLi_Hr09sd84uKF0eLU91vHQNnTDloMSDbMf61es1MmfwmxPvxbDoQ2M&_nc_ohc=O9Ida3mKbRMAX8kF3P_&_nc_pt=1&_nc_ht=scontent.fcgh2-1.fna&oh=c57df3829b11738b4547aa3b1b6599fb&oe=5F4C148B">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title >Ong Próximo</v-list-item-title>
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="'/home'"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
     

</template>

<script>
  export default {
    props:['menuStatus'],
    data () {
      return {
        widthInitial: screen.width,
        drawer: null,
        items: [
          { title: 'Cabeçalho', icon: 'mdi-page-layout-header', to: '/header' },
          { title: 'Rodapé', icon: 'mdi-page-layout-footer' },
          { title: 'Conteúdo das páginas', icon: 'mdi-newspaper-variant-multiple' },
        ],        
      }
    },
    // watch:{
    //   menuStatus(){
    //     this.drawer = !this.drawer
        
    //   }
    // }
  }
</script>

<style scoped>
  

</style>