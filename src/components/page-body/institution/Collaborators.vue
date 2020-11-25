<template>
    <div>
      <div class="d-flex flex-wrap">
          <v-slide-item
              v-for="(collaborator, collaboratorIndex) in collaborators" 
              :key="collaborator.name"
              >
              <v-card
              class="mb-4 mr-3"
              width="330"
              min-width="330"
              outlined
              v-if="collaborator.name"
              >
              <v-list-item three-line>
                  <v-list-item-content>
                  <div class="overline mb-2">
                      Colaborador
                  </div>
                    <v-list-item-title class="mb-1 collaborator-name">
                        {{collaborator.name}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="subtitle-card">
                      {{ collaborator.occupation }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                  tile
                  size="100"
                  color="gray"
                  class="image-collaborator"
                  >
                  <img alt="Foto do colaborador" :src="collaborator.photo || anonymousPhoto">
                  </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                  <v-btn
                  outlined
                  text
                  color="white"
                  class='info'
                  @click="[editCollaborator(collaboratorIndex)]"
                  >
                  Editar
                  </v-btn>

                  <v-btn
                  outlined
                  color="white"
                  class='error'
                  text
                  @click="[deleteCollaborator(collaboratorIndex)]"
                  >
                  Excluir
                  </v-btn>
              </v-card-actions>
            </v-card>
            </v-slide-item>
          <div>
            <v-row justify="center">
              <v-dialog
                  v-model="dialog.openDialog"
                  persistent
                  max-width="600px"
                  v-if="dialog.openDialog && (editedCollaborator.id || dialog.newDialog === true)"
                  >
                    <v-card class="modal">
                      <v-card-title>
                        <span class="headline">Editar</span>
                      </v-card-title>
                      <hr>
                      <v-row justify="center" class="mt-1">
                        <v-avatar
                        size="200"
                        color="grey"
                        class="image-collaborator"
                        >
                          <img 
                            :src="editedCollaborator.photo || anonymousPhoto"
                            alt="Foto de perfil"
                          >
                        <v-file-input
                            label="File input"
                            hide-input
                            prepend-icon="mdi-camera"
                            dark 
                            class="logo-image"
                            @change="fileSelected"
                        ></v-file-input>
                        </v-avatar>
                      </v-row>       

                      <v-card-text>
                        <v-container>
                            <v-row>                          
                              <v-col cols="12">
                                <v-text-field
                                  label="Nome*"
                                  v-model="editedCollaborator.name"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Função/Ocupação*"
                                  v-model="editedCollaborator.occupation"
                                  required
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="[changeDialog({'openDialog': false, 'newDialog': false}), cleanArrayCollaborator()]"
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
            </div>
      </div>
    </div>
</template> 

<script>
  import { createNamespacedHelpers } from 'vuex'
  import { read, uploadFile, downloadFile, update, deletePhoto } 
    from '@/services/foundation/page-body/institution'

  const { mapGetters, mapActions } = createNamespacedHelpers('collaborator')
  export default {
    data:()=> ({
      anonymousPhoto: null,
      editedCollaboratorIndex: null,
      editedCollaborator: {
        id: '',
        name: '',
        occupation: '',
        photo: ''
      },
      editedFile: null,
    }),
    computed:{
      ...mapGetters({dialog: 'readDialog', collaborators:'readCollaborators'})
    },
    methods:{
      ...mapActions(['changeDialog', 'changeListCollaborators']),
      save(){
        const sizeArrayCollaborator = this.collaborators.length
        this.editedCollaborator.id ? '': 
        this.editedCollaborator.id = this.collaborators[sizeArrayCollaborator - 1].id + 1
        if(this.editedCollaborator.name === '' || this.editedCollaborator.occupation === '') {
            alert('Campos não preenchidos')
          }else if(this.editedFile){ 
            const nameFileEdited = `collaborator-${this.editedCollaborator.id}`
            this.changeImage(nameFileEdited)
          } 
        this.addEditedCollaboratorInCollaborators()
          
      },
      changeImage(nameFileEdited){
        uploadFile(this.editedFile, nameFileEdited)
            .then(()=>{
              this.updateFile(nameFileEdited).then(urlImage => { 
                this.editedCollaborator.photo = urlImage
                })
            }).catch(()=>{
              alert('Erro ao editar imagem. Tente novamente mais tarde');
            })
      },
      addEditedCollaboratorInCollaborators(){
        this.dialog.newDialog ? 
        this.collaborators.push(this.editedCollaborator):
        this.collaborators[this.editedCollaboratorIndex] = this.editedCollaborator
        this.uploadCollaborators(this.collaborators)
        this.changeDialog({'openDialog': false, 'newDialog': false})
        this.cleanArrayCollaborator()
      },
      editCollaborator(collaboratorIndex){
        this.editedCollaboratorIndex = collaboratorIndex
        this.editedCollaborator.name =  this.collaborators[collaboratorIndex].name 
        this.editedCollaborator.occupation =  this.collaborators[collaboratorIndex].occupation 
        this.editedCollaborator.photo = this.collaborators[collaboratorIndex].photo
        this.editedCollaborator.id = this.collaborators[collaboratorIndex].id
        this.changeDialog({'openDialog': true, 'newDialog': false})
      },
      cleanArrayCollaborator(){
        this.editedCollaborator = {
          id: '',
          name: '',
          occupation: '',
          photo: ''
        }
      },
      fileSelected(event){
        const nameFileEdited = `collaborator-edit`
        this.editedFile = event
        this.changeImage(nameFileEdited)   
      },
      async deleteCollaborator(idCollaborator){
        const confirmDelete = confirm('Está deletando o colaborador. Deseja continuar?')
        if(!confirmDelete) return
        this.editedCollaborator.photo? await deletePhoto(`collaborator-${idCollaborator}`): ''
        this.collaborators.splice(idCollaborator, 1)
        this.uploadCollaborators(this.collaborators)
      },
      async uploadCollaborators(newListCollaborators){
        await update(newListCollaborators)
      },
      async updateFile(pathFile){
        return await downloadFile(`page-body/institution/${pathFile}`)
          .then(urlImage => urlImage)
      }
    },
      async created(){
      const response = await read()
      const collaborators = response.collaborators
      this.changeListCollaborators(collaborators)
      this.anonymousPhoto = collaborators.filter(collaborator => collaborator.anonymousPhoto)[0].anonymousPhoto
    }
  }
</script>

<style scoped>
  .modal{
    overflow: hidden
  }
  .subtitle-card{
    height: 38px;
  }
  .collaborator-name{
    font-weight: bold;
    font-size: 1.1rem;
  }

  .image-collaborator img{
    border-radius: 50%;
    border: thin solid rgba(0, 0, 0, 0.12);
  }
  .logo-image{
        position: absolute;
        right: 18px;
        top: 130px;
        z-index: 2;
    }
</style>