<template>
    <div>
        <v-card
            max-width="100%"
            outlined
            class="pa-4 mb-3 rounded-lg"
            v-for="(project, indexItem) in projects"
            :key="project.title"
        >
            <div class="content-card">
                <v-img            
                    :src="project.image"
                    class="image-card"
                >
                    <v-file-input
                        hide-input
                        prepend-icon="mdi-camera"
                        dark
                        class="logo-image"
                        @click="getIdAndIndexOfProject(project.id, indexItem)"
                        @change="fileProjectSelected"
                    ></v-file-input>
                </v-img>
            
                <div class="container-project-text">
                    <div
                        class="button-featured mobile-featured"
                    >
                        <v-btn
                            icon
                            :color="project.featured ? 'pink':'none'"
                            @click="project.featured = !project.featured"
                        >
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                    </div>
                    
                    <h3 class="project-title">
                        <input 
                            type="text"
                            class="text-justify pa-1"
                            name="project-title"
                            v-model="project.titleProject" 
                        >
                    </h3>
                    <p class="project-text">
                        <textarea 
                            class="text-justify pa-1"
                            name="project-text"
                            v-model="project.text" 
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
                                <v-btn 
                                    text
                                    @click="[
                                        saveProject(),
                                        getIdAndIndexOfProject(project.id, indexItem)
                                        ]"
                                    >
                                    <v-icon class="mr-1">mdi-content-save</v-icon>
                                    Salvar
                                </v-btn>
                                <v-btn 
                                    text
                                    @click="deleteProject(indexItem, project.id)"
                                    >
                                    <v-icon class="mr-1">mdi-trash-can</v-icon>
                                    Excluir
                                </v-btn>
                            </div>

                            <div
                                class="button-featured desktop-featured"
                            >
                                <v-btn
                                    icon
                                    :color="project.featured ? 'pink':'none'"
                                    @click="project.featured = !project.featured"
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

        <v-btn
          elevation="2"
          fab  
          class="info mb-5"
          @click="addNewProject"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { uploadFile, downloadFile, update, deleteImage} from '@/services/foundation/page-body/projects'
import alertMessages from '@/components/mixins/alertMessages'

const { mapGetters, mapActions } = createNamespacedHelpers('projects')
export default {
    mixins:[alertMessages],
    props:{
        projects: {type: Array},
        stateProject: {type: String}
    },
    data(){
        return{
            dialog: false,
            currentProjectId: null,
            currentProjectIndex: null,
            hasSaved :false,
            messageAlert: '',
            typeAlert: '',
            newProject: {
                titleProject: 'Digite o título do novo projeto',
                text: 'Fale sobre o projeto',
                image: '',
                featured: false,
                id: null
            }
        }
    },
    computed:{
        ...mapGetters({allProjects:'readAllProjects'})
    },
    methods:{
        addNewProject(){
            const idNewProject = this.projects[this.projects.length - 1].id + 1
            this.newProject.id = idNewProject
            this.projects.push(this.newProject)
        },
        async saveProject(){
            await update(this.allProjects)
                .then(()=>{
                    this.showAlertMessage(true, 'success', 'Projeto atualizado com sucesso!!')
                }).catch(()=>{
                    this.showAlertMessage(true, 'error', 'Erro ao atualizar projeto!!')
                })
        },
        ...mapActions(['changeDialog']),
        fileProjectSelected(file){
            uploadFile(file, `project-${this.currentProjectId}`, this.stateProject)
                .then(()=>{
                    this.showAlertMessage(true, 'success', 'Imagem adicionada com sucesso!!')
                    this.updateFile()
                }).catch(()=>{
                    this.showAlertMessage(true, 'error', 'Erro ao adicionar imagem!!')
                })
        },
        async updateFile(){
            await downloadFile(`page-body/projects/${this.stateProject}/project-${this.currentProjectId}`)
                .then(urlImage => {
                    this.pushUrlInListProjects(urlImage)
                })
        },
        pushUrlInListProjects(newItem){
            const currentListUrl = this.projects
            currentListUrl[this.currentProjectIndex].image = newItem
        },
        validatesProjectAlert(indexItem){
            return this.currentProjectIndex === indexItem
        },
        getIdAndIndexOfProject(idProject, indexProject){
            this.currentProjectId = idProject
            this.currentProjectIndex = indexProject
        },
        deleteProject(indexProject, idProject){
            this.checkIfHasImage(indexProject, idProject)
            this.projects.splice(indexProject, 1)
            update(this.allProjects)             
        },
        checkIfHasImage(indexProject, idProject){
            this.projects[indexProject].image ? 
                deleteImage(this.stateProject, `project-${idProject}`): ''
        }
    }
}
</script>

<style>
    .image-card{
        width: 100%;
        height:180px;
        border-radius: 10px !important;
        background:gray;
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
    .project-text textarea, .project-title input{ 
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