<template>  
     <v-list
          dense
          nav
          class="py-0"
          >
          <v-list-item>
            <v-list-item-avatar>
              <img :src="logoUrl">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title >Ong Próximo</v-list-item-title>
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider/>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
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
import { downloadFile } from '@/services/foundation/header'
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Cabeçalho', icon: 'mdi-page-layout-header', to:'/cabecalho' },
          { title: 'Rodapé', icon: 'mdi-page-layout-footer', to:'/rodape' },
          { title: 'Conteúdo das páginas', icon: 'mdi-newspaper-variant-multiple' },
        ],
        logoUrl: ''        
      }
    },
    async created(){
        this.logoUrl = await downloadFile('header/logo-ong-admin.jpg')
      }
  }
</script>
