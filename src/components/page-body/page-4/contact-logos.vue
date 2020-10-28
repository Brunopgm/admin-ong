<template>
        <v-container fluid class="pl-0">
            <h1 class="title">Logos</h1>
            <p>Modifique os logos de e-mail e endereço</p>
            <v-row dense class="container-images">
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                class="flex-grow-0"
                >
                <v-card class="card-image">
                    <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    width="100%"
                    >
                    <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-file-input
                        class="pt-0 justify-end"
                        label="File input"
                        hide-input
                        prepend-icon="mdi-pencil"
                        @click="setNameFile(card.nameFile)"
                        @change="fileSelected"
                    >
                    </v-file-input>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { uploadFile, read } from '@/services/foundation/page-body/page4'

const { mapGetters } = createNamespacedHelpers('page4')
export default {
    data: () => ({
      adressIcon: null,
      emailIcon:null,
      nameFile:'',
      cards: [
        { title: 'Endereço', src: null, nameFile: 'endereco'},
        { title: 'E-mail', src: null, nameFile: 'email' },
      ]
    }),
    computed:{
      ...mapGetters({readListContact: 'readList'})
    },
    methods:{
        fileSelected(event){
          const file = event
          uploadFile(file, `${this.nameFile}`)
            .then(()=>{
              console.log('Tudo ok');
              this.updateFile()
            }).catch(()=>{
              console.log('erro');
            })
        },
        setNameFile(titleFile){
          this.nameFile = titleFile.toLowerCase();
        }
    },
    async created(){
        const response = await read()
        let contactIcons = null
        response.contactData.forEach(e => {
            contactIcons = e.contactIcons
            this.cards[0].src = contactIcons.adressIcon
            this.cards[1].src = contactIcons.emailIcon
        })
        this.$store.state.page4.readContactIcons = contactIcons
    }
  }
</script>
<style>
    .container-images{
        flex-direction: column;
    }
    .card-image{
        width: 100%;
        max-width: 320px;
    }

    @media(min-width: 620px){
        .container-images{
        flex-direction: row;
        }   
    }
</style>