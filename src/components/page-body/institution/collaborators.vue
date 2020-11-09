<template>
    <div>
      <div class="d-flex flex-wrap">
          <v-slide-item
              v-for="(collaborator, collaboratorIndex) in collaborators" 
              :key="collaborator.name"
              >
              <v-card
              class="mb-4 mr-3"
              width="344"
              outlined
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
                  <img :src="collaborator.photo || collaborators.anonymousPhoto">
                  </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                  <v-btn
                  outlined
                  text
                  @click="[editCollaborator(collaboratorIndex)]"
                  >
                  Editar
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
                  v-if="dialog.openDialog && (editedCollaborator.name || dialog.newDialog === true)"
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
  import { read, uploadFile, downloadFile, update } 
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
            return
          }else if(this.editedFile){ 
            uploadFile(this.editedFile, `collaborator-${this.editedCollaborator.id}`)
            .then(()=>{
              this.updateFile().then(urlImage => { 
                this.editedCollaborator.photo = urlImage
                this.addEditedCollaboratorInCollaborators()
                })
            }).catch(()=>{
              alert('Erro ao editar. Tente novamente mais tarde');
            })   
          } else{
            this.addEditedCollaboratorInCollaborators()
          }
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
          this.editedFile = event  
      },
      async uploadCollaborators(newListCollaborators){
        await update(newListCollaborators)
      },
      async updateFile(){
        return await downloadFile(`page-body/institution/collaborator-${this.editedCollaborator.id}`)
          .then(urlImage => urlImage)
      }
    },
      async created(){
      const response = await read()
      const collaborators = response.collaborators
      this.changeListCollaborators(collaborators)
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
  }
  .logo-image{
        position: absolute;
        right: 18px;
        top: 130px;
        z-index: 2;
    }
</style>