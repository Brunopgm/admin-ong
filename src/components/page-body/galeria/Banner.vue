<template>
    <div>
        <v-card
        class="mb-5"
        width="344"
        :loading='showLoading'
        v-for="content in bannerContents"
        :key="content.photo"
        > 
            <div class="container-image" :style="imageCard">
            <v-file-input
                label="File input"
                hide-input
                prepend-icon="mdi-camera"
                dark
                class="logo-image"
            ></v-file-input>
            </div>
            
            <v-card-title>
            <a :href="url || ''" class="title-url">
                URL
                <v-icon>mdi-link-variant</v-icon>
            </a>
            </v-card-title>

            <v-card-subtitle class="url-subtitle">
            {{ url || 'Essa imagem não possui URL'}}
            </v-card-subtitle>

            <v-row justify="center">
            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
                <template v-slot:activator="{ on, attrs }" class="container-buttons-card">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="mb-2 mr-2"
                >
                    Descrição
                </v-btn>
                
                <v-btn
                    color="primary"
                    dark
                    class="mb-2 mr-2"
                >
                    <label 
                    for="input-image" 
                    id="input-image-label">Imagem
                    <v-icon small>mdi-camera</v-icon>
                    </label>
                    <input name="input-image" type="file" id="input-image"> 
                </v-btn>
            
                </template>
            
                <v-card>
                <v-card-title>
                    <span>Altere o subtitulo</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                    <v-row>
                        <v-text-field
                            label="Digite o novo subtitulo"
                            required
                            v-model="editedItem.url"
                        ></v-text-field>
                    </v-row>
                    </v-container>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="blue darken-1"
                    text
                    @click="[dialog = false, editedItem.url = '']"
                    >
                    Fechar
                    </v-btn>
                    <v-btn
                    color="blue darken-1"
                    text
                    @click="save()"
                    >
                    Salvar
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        </v-card>
    </div>
</template>
    

<script>
import {  read } from '@/services/foundation/page-body/galery/banner'

export default {
    props:{
        image :{ type : String}, 
        url: { type : String }, 
        indexItem: { type : Number}
        },
    data(){
      return {
        bannerContents:null,
        dialog: false,
        editedItem: {
            image:'',
            description: ''
          },
          showImage: true,
          showLoading: false
      }
    },
    computed:{  
      imageCard(){
        return {
          backgroundImage: `url('${this.image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'contain'
        }
      }
    },
    methods:{
      save(){
        this.dialog = false
      },
    },
    async created(){
        const response = await read()
        this.bannerContents = response.banner
        this.showLoading = false
    }
}
</script>

<style>
    .logo-image{
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 2;
    }
    .container-image{
        background: #c4c4c4;
        height: 200px;
        width: 100%;
        background-repeat: no-repeat;
    }
    
    .image{
        position: relative;
        z-index: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    #input-image{
      display: none;
    }
   
    #input-image-label{
      cursor: pointer;
    }
    
    .title-url{
      text-decoration: none;    
      padding-bottom: 0.8rem;
    }
    .url-subtitle{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%
    }
</style>