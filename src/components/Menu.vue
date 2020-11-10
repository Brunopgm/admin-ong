<template>
  
     <v-list
          dense
          nav
          width="307px"
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

          <v-list>
            <v-list-item
            v-for="item in fields"
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
          
            <v-list-group
              :value="true"
              prepend-icon="mdi-newspaper-variant-multiple"
            >
                <template v-slot:activator>
                  <v-list-item-title>Corpo das páginas</v-list-item-title>
                </template>

                <v-list-item
                    v-for="([text, icon, link], i) in subfields"
                    :key="i"
                    @click="goToLink(link)"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                    
                    <v-list-item-title v-text="text" class="subtitle-text"></v-list-item-title>
                  </v-list-item>

              </v-list-group>
          </v-list>
        
        </v-list> 
</template>

<script>
import { downloadFile } from '@/services/foundation/header'
  export default {
    data () {
      return {
        drawer: null,
        fields: [
          { title: 'Cabeçalho', icon: 'mdi-page-layout-header', to:'/cabecalho' },
          { title: 'Rodapé', icon: 'mdi-page-layout-footer', to:'/rodape' },
        ],
        subfields: [
        [ 'Instituição', 'mdi-chevron-right', 'institution'],
        [ 'Galeria', 'mdi-chevron-right', 'page-2' ],
        [ 'Projetos e ações', 'mdi-chevron-right', 'page-3'],
        [ 'Contato e formulários', 'mdi-chevron-right', 'page4']
        ],
        logoUrl: ''
      }
    },
    methods:{
      goToLink(link){
        this.$router.push({name:link})
      }
    },
    async created(){
        this.logoUrl = await downloadFile('header/logo-ong-admin.jpg')
      }
  }
</script>