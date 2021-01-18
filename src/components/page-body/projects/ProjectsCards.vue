<template>
    <div>
        <v-card
            max-width="100%"
            outlined
            class="pa-4 mb-3 rounded-lg"
            v-for="(projeto, indexItem) in projetos"
            :key="projeto.title"
        >
            <div class="content-card">
                <v-img            
                    :src="projeto.image"
                    class="image-card"
                >
                    <v-file-input
                        hide-input
                        prepend-icon="mdi-camera"
                        dark
                        class="logo-image"
                        @click="
                            currentProjectId = projeto.id
                            currentProjectIndex = indexItem
                            "
                        @change="fileProjectSelected"
                    ></v-file-input>
                </v-img>
            
                <div class="container-project-text">
                    <div
                        class="button-featured mobile-featured"
                    >
                        <v-btn
                            icon
                            :color="projeto.featured ? 'pink':'none'"
                            @click="projeto.featured = !projeto.featured"
                        >
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                    </div>
                    
                    <h3 class="project-text">
                        <input 
                            type="text"
                            class="text-justify pa-1"
                            name="project-title"
                            v-model="projeto.titleProject" 
                        >
                    </h3>
                    <p class="project-text">
                        <textarea 
                            class="text-justify pa-1"
                            name="project-text"
                            v-model="projeto.text" 
                            cols="30" 
                            rows="6"
                        ></textarea>
                    </p>
                </div>
            </div>
         
            <v-divider class="my-4"></v-divider>
            <div>

                <v-row justify="center">
                    
                        <div class="container-buttons">
                            <div class="buttons-edit">
                                <v-btn text>
                                    <v-icon class="mr-1">mdi-content-save</v-icon>
                                    Salvar
                                </v-btn>
                                <v-btn text>
                                    <v-icon class="mr-1">mdi-trash-can</v-icon>
                                    Excluir
                                </v-btn>
                            </div>

                            <div
                                class="button-featured desktop-featured"
                            >
                                <v-btn
                                    icon
                                    :color="projeto.featured ? 'pink':'none'"
                                    @click="projeto.featured = !projeto.featured"
                                >
                                    <v-icon>mdi-star</v-icon>
                                </v-btn>
                            </div>
                        </div>
                </v-row>
            </div>
            <v-snackbar
                v-if="validatesProjectAlert(indexItem)"
                v-model="hasSaved"
                absolute
                bottom
                left
                :color="typeAlert"
                >
                {{ messageAlert }}
            </v-snackbar>
        </v-card>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { uploadFile, downloadFile } from '@/services/foundation/page-body/projects'
import alertMessages from '@/components/mixins/alertMessages'

const { mapActions } = createNamespacedHelpers('projects')
export default {
    mixins:[alertMessages],
    props:{
        projetos: {type: Array},
        stateProject: {type: String}
    },
    data(){
        return{
            dialog: false,
            currentProjectId: null,
            currentProjectIndex: null,
            hasSaved :false,
            messageAlert: '',
            typeAlert: ''
        }
    },
    methods:{
        ...mapActions(['changeDialog']),
        fileProjectSelected(file){
            this.showLoading = true
            this.showAlertMessage(true, 'success', 'Imagem adicionada com sucesso!!')
            uploadFile(file, `project-${this.currentProjectId}`, this.stateProject)
                .then(()=>{
                    this.updateFile()
                }).catch(()=>{
                    this.showAlertMessage(true, 'error', 'Erro ao adicionar imagem!!')
                    this.showLoading = false  
                })
        },
        async updateFile(){
            await downloadFile(`page-body/projects/${this.stateProject}/project-${this.currentProjectId}`)
                .then(urlImage => {
                    this.pushUrlInListProjects(urlImage)
                })
        },
        pushUrlInListProjects(newItem){
            const currentListUrl = this.projetos
            currentListUrl[this.currentProjectIndex].image = newItem
        },
        validatesProjectAlert(indexItem){
            return this.currentProjectIndex === indexItem
        }
    }
}
</script>

<style>
    .image-card{
        max-width: 100%;
        height:180px;
        border-radius: 10px !important;
    }
    .container-project-text{
        width: 100%;
        margin-top:10px;
    }
    .project-text{ 
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .project-text textarea, .project-text{ 
        width: 100%;
    }
    .project-text p{ 
        word-wrap: break-word;
    }

    .container-buttons{
            width: 100%;
    }

    .button-featured{
            text-align: end;
        }
    .desktop-featured{
        display: none;
    }
    .container-image-modal{
        width: 95%;
        margin: 0 auto;
    }
    
    ::-webkit-input-placeholder {
        color: black;
    }

    :-moz-placeholder {
        color: black;
    }

    ::-moz-placeholder {
        color: black;  
    }

    :-ms-input-placeholder {  
        color: black;  
    }



    @media(min-width: 370px){
        .container-buttons{
            display: block;
        }
        .container-buttons{
            display: flex;
            justify-content: space-between;
        }   
    }
    @media(min-width: 700px){
        .image-card{
            max-width: 40%;
            height:180px;
            border-radius: 10px !important;
        }   
        .content-card{
            display: flex;
        }

        .container-project-text{
            margin: 0px 10px 0px 10px;
        }
        .mobile-featured{
            display: none;
        }
        .desktop-featured{
            display: inline-block;
    }
    }
</style>