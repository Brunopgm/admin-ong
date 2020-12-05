<template>
    <div class="page-content">
        <v-container fluid v-for="item in readFormText.formsText" :key="item.title">
            <div class="text-form">
                <h3 class="title-form">{{ item.title }}</h3>
                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>            
                <span>{{item.text}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>

            <v-textarea
                class="mt-5"
                name="input-7-1"
                filled
                :label="item.title"
                v-model="item.text"
            >
            </v-textarea>
            <div class="d-flex">
                <v-btn
                    color="grey"
                    class="white--text button-textarea mr-5"
                    @click="save()"
                    >
                    Salvar
                </v-btn>

                <v-btn
                    color="grey"
                    class="white--text button-textarea"
                    @click.stop="[dialog = true]"
                    v-if="item.modalImage"
                    >
                    Editar imagem
                </v-btn>
            </div>
            <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    max-width="400"
                    v-if="item.modalImage"
                    >
                        <v-card class="container-modal-button">
                            <img class="image-logo" :src="item.modalImage">
                            <div class="container-button">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2 upload-button"
                                >
                                    <label 
                                    for="input-image" 
                                    id="input-image-label">Selecionar
                                    <v-icon small>mdi-camera</v-icon>
                                    </label>
                                    <input @change="fileSelected" name="input-image" type="file" id="input-image"> 
                                </v-btn>

                            </div>
                        </v-card>
                    </v-dialog>
            </v-row>
            <hr>            
        </v-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { create, uploadFile, downloadFile } from '@/services/foundation/page-body/contactAndForm'

const { mapGetters } = createNamespacedHelpers('contactAndForm') 
export default {
    data:()=>({
        dialog: false
    }),
    computed:{
        ...mapGetters({readFormText: 'listContactInformation'})
    },
    methods: {
        save () {
            this.isEditing = !this.isEditing
            this.uploadContactData(this.readFormText)
        },
        fileSelected(file){
          const nameFile = `imagem-modal.jpeg`
          uploadFile(file.target.files[0], nameFile)
            .then(()=>{
              this.updateFile(nameFile)
            })
            .catch(()=>{
              console.log('erro');
            })
        },
        async uploadContactData(newFormText){
            await create(newFormText)
        },
        async updateFile(nameFile){
         await downloadFile(`page-body/page-4/${nameFile}`)
          .then(urlImage => {
            this.readFormText.formsText.donationModal.modalImage = urlImage
        })
        }
    }
}
</script>

<style>
    .icon-open{
        top: -8px;
    }
    .icon-close{
        bottom: -5px
    }
    .text-form{
        min-height: 50px;
        text-align: justify;
    }
    .button-textarea{
        top: -20px;
    }

    .container-button{
        width: 100%;
        display: flex;
        
    }
    .upload-button{
        margin: 0 auto;
    }
    .container-modal-button{
        background: #E0E0E0 !important;
    }

    @media(min-width: 600px){
        .title-form{
            text-align: right;
        }
    }
</style>