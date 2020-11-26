<template>
    <div>
        <v-card
        class="mb-5"
        width="344"
        :loading='showLoading'
        > 
            <div class="container-image" :style="imageCard">
            <v-file-input
                label="File input"
                hide-input
                prepend-icon="mdi-camera"
                dark
                class="logo-image"
                @change="fileSelected"

            ></v-file-input>
            </div>
            
            <v-card-title>
            <h4>{{ title }}</h4>
            
            </v-card-title>

            <v-card-subtitle class="text-subtitle">
            {{ text || 'Essa imagem não possui texto'}}
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
                    <input @change="fileSelected" name="input-image" type="file" id="input-image"> 
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
                            v-model="editedItem.text"
                        ></v-text-field>
                    </v-row>
                    </v-container>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="blue darken-1"
                    text
                    @click="[dialog = false]"
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
import { uploadFile, downloadFile } from '@/services/foundation/page-body/galery/banner'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('banner')
export default {
    props:{
        title: { type : String }, 
        image: { type : String }, 
        text: { type : String }, 
        indexItem: { type : Number}
        },
    data(){
      return {
        dialog: false,
        editedItem: {
            title:'',
            image:'',
            text: ''
          },
          showImage: true,
          showLoading: false
      }
    },
    computed:{
        ...mapGetters({bannerFields:'readBannerFields'}),
        imageCard(){
            return {
                backgroundImage: `url('${this.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'contain'
                }
              },
    },
    methods:{
        ...mapActions(['changeBannerFields']),
      save(){
        this.dialog = false
      },
      fileSelected(event){
          this.showLoading = true
          const file = event.target ? event.target.files[0] : event 
          uploadFile(file, `${this.title}`)
            .then(()=>{
              this.updateFile()
            }).catch(()=>{
              this.showLoading = false
            })
      },
      pushUrlInList(newItem){
        const currentListUrlImage = this.bannerFields
        newItem.url ? 
        currentListUrlImage[this.indexItem].url = newItem.url: 
        currentListUrlImage[this.indexItem].image = newItem;
        this.changeBannerFields(currentListUrlImage)
      },
      async updateFile(){
        await downloadFile(`page-body/galery/banner/${this.title}`)
            .then(urlImage => {
            this.pushUrlInList(urlImage)
            })
      },
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
    
    /* .title-url{
      text-decoration: none;    
      padding-bottom: 0.8rem;
    } */
    .text-subtitle{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%
    }
</style>