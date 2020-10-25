<template>
        <v-container fluid class="pl-0">
            <h1 class="title">Logos</h1>
            <p>Modifique os logos de contato e e-mail</p>
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
import { uploadFile, downloadFile } from '@/services/foundation/page-body/page-4'
 export default {
    data: () => ({
      cards: [
        { title: 'Endereço', src: 'https://firebasestorage.googleapis.com/v0/b/ong-proximo.appspot.com/o/page-body%2Fpage-4%2Femail.png?alt=media' },
        { title: 'E-mail', src: 'https://firebasestorage.googleapis.com/v0/b/ong-proximo.appspot.com/o/page-body%2Fpage-4%2Femail.png?alt=media'},
      ],
    }),
    methods:{
        fileSelected(event){
        //   this.showLoading = true
          const file = event.target ? event.target.files[0] : event 
          uploadFile(file, `logo-${this.indexItem + 1}`)
            .then(()=>{
              this.updateFile()
            }).catch(()=>{
            //   this.showLoading = false;
              console.log('erro');
            })
        }
    },
    async created(){
        const teste = await downloadFile(`page-body/page-4/endereco.png`)
        console.log(teste);
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