<template>  
     <v-list
          dense
          nav
          class="py-0"
          >
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/56454602_413481132763174_8387265942979084288_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=xKYLXbXb7P8AX8st4JO&_nc_pt=1&_nc_ht=scontent.fcgh2-1.fna&oh=a6027c9b6d12a20a2fe7235d3b0d2267&oe=5F77960B">
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
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Cabeçalho', icon: 'mdi-page-layout-header', to:'cabecalho' },
          { title: 'Rodapé', icon: 'mdi-page-layout-footer', to:'rodape' },
          { title: 'Conteúdo das páginas', icon: 'mdi-newspaper-variant-multiple' },
        ],        
      }
    },
  }
</script>
