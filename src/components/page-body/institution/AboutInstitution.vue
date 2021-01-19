<template>
    <div>
        <h3 class="mt-5">Sobre a instituição</h3>
        <p class="mb-7">Personalize os textos/imagens sobre a história e missão da instituição</p>
        <v-card v-resize="onResize">
            <v-tabs :vertical=windowSizeMobile>
                <v-tab v-for="field in fields" :key="field.name">
                    {{ field.name }}
                </v-tab>
                <v-tab-item v-for="(field, indexFields) in fields" :key="field.name">
                    
                    <v-card flat>
                        <v-card-text>
                            <p class="mb-0 text-justify title">
                                {{ field.title }}
                            </p>
                        </v-card-text>
                        <v-card-text>
                            <p class="mb-0 text-justify">
                                {{ field.text }}
                            </p>
                        </v-card-text>
                    </v-card>
                    <v-card-actions>
                    <v-btn
                        outlined
                        text
                        color="white"
                        class='info'
                        @click="[
                            dialog = true,
                            indexFieldCurrent = indexFields,
                            editField = Object.assign({}, field)
                            ]"
                        >
                        Editar
                    </v-btn>
                    </v-card-actions>

                </v-tab-item>
                <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                    >
                        <v-card class="modal">
                        <v-card-title>
                            <span class="headline">Editar</span>
                        </v-card-title>
                        <hr> 
                        <v-card-text v-if="dialog">
                            <v-container>    
                            <div v-if="editField.photo">
                                <p class='text-justify'>Modifique a imagem que acompanha o texto</p>
                                <v-img
                                    max-height="250"
                                    class="rounded-lg dialog-image"
                                    :src="editField.photo"
                                ></v-img>
                                <v-btn color="blue darken-1 white--text mt-1">
                                    <label 
                                        for="input-image-dialog"
                                    
                                    >
                                        Mudar foto
                                    </label>

                                </v-btn>
                                <input 
                                    @change="getFileSelected" 
                                    name="input-image-dialog" 
                                    type="file" 
                                    id="input-image-dialog"> 

                            </div>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                        label="Titulo"
                                        v-model="editField.title"
                                        required
                                        ></v-text-field>
                                    </v-col>                          
                                <v-col cols="12">
                                    <v-textarea
                                        name="input-7-1"
                                        label="Modifique o texto"
                                        v-model="editField.text"
                                    ></v-textarea>
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="cancel()"
                                >
                                Fechar
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="saveFields()"                        
                            >
                            Salvar
                            </v-btn>
                            </v-card-actions>
                        </v-card>

                        </v-dialog>
                </v-row>
            </v-tabs>

        </v-card>
    </div>
</template>

<script>
    import { read, uploadFile, downloadFile, update } from '@/services/foundation/page-body/aboutInstitution'
    export default {
        data: () => ({
            dialog: false,
            windowSizeMobile: false,
            indexFieldCurrent:0,
            fields:null,
            fileSelected: null,
            editField: null
        }),
        mounted () {
            this.onResize()
        },
        methods: {
            saveFields(){
                this.dialog = false
                this.saveImage()
                this.fields[this.indexFieldCurrent] = this.editField
                update(this.fields)
            },
            saveImage(){
                const nameFile = `mission-image.jpeg`
                uploadFile(this.fileSelected, nameFile)
                    .then(()=>{
                        this.updateFile(nameFile)
                    })
            },
            cancel(){
                this.dialog = false
                this.updateFile(`mission-image.jpeg`)
                this.fileSelected = null
            },
            onResize () {
                const windowSize = window.innerWidth
                windowSize <=550? this.windowSizeMobile = false : this.windowSizeMobile = true
            },
            getFileSelected(event){
                const nameFile = `fileTemporary.jpeg`
                this.showLoading = true
                this.fileSelected = event.target.files[0]
                uploadFile(this.fileSelected, nameFile)
                    .then(()=>{
                        this.updateFile(nameFile)
                    })
            },
            pushUrlInList(newItemUrl){
                this.fields[this.indexFieldCurrent].photo = newItemUrl
                this.editField.photo = newItemUrl
            },
            async updateFile(nameFile){
            await downloadFile(`page-body/aboutInstitution/${nameFile}`)
            .then(urlImage => {
                this.pushUrlInList(urlImage)
                })
            },
            },
            async created(){
                const response = await read()
                this.fields = response.fields
            }
    }
</script>

<style>
    .button-change-image{
        width: 45px;
        height: 45px;
        margin-left: 20px;
        top: -20px;
        position: relative;
        z-index: 1;
    }

    .dialog-image{
        background: gray;
    }
    #input-image-dialog{
        display: none;
    }
</style>