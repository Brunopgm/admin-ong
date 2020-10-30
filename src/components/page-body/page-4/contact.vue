<template>
        <v-container fluid class="pl-0">
            <contactTable/>
            <h1 class="title">Logos</h1>
            <p>Modifique os logos de e-mail e endereço</p>
            
            <v-row dense class="container-images">
                <v-col
                v-for="(card, i) in cards"
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
                    min-width="200px"
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
                        @click="setNameFile(card.nameFile, i)"
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
import contactTable from './contact-table'
import { createNamespacedHelpers } from 'vuex'
import { uploadFile, downloadFile, read } from '@/services/foundation/page-body/page4'

const { mapGetters, mapActions } = createNamespacedHelpers('page4')
export default {
    components:{contactTable},
    watch:{
      listContactData(){
        this.cards[0].src = this.listContactData.contactIcons.addressIcon
        this.cards[1].src = this.listContactData.contactIcons.emailIcon
      }
    },
    data: () => ({
      listContactData: '',
      adressIcon: null,
      emailIcon:null,
      editedNameFile:'',
      editedFileIndex:null,
      cards: [
        { title: 'Endereço', src: null, nameFile: 'endereco'},
        { title: 'E-mail', src: null, nameFile: 'email' },
      ]
    }),
    computed:{
      ...mapGetters({readContactData:'readContactInformation'})
    },
    methods:{
       ...mapActions(['changeContactInformation']),
        fileSelected(file){
          uploadFile(file, `${this.editedNameFile}`)
            .then(()=>{
              console.log('Tudo ok');
              this.updateFile()
            })
            .catch(()=>{
              console.log('erro');
            })
        },
        setNameFile(titleFile, fileIndex){
          this.editedNameFile = titleFile.toLowerCase();
          this.editedFileIndex = fileIndex
        },
        async updateFile(){
         await downloadFile(`page-body/page-4/${this.editedNameFile}.png`)
          .then(urlImage => {
            this.cards[this.editedFileIndex].src = urlImage
            })
      },
    },
    async created(){
        const response = await read()
        this.listContactData = response.contactInformation
        this.changeContactInformation(response.contactInformation)
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