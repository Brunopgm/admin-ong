<template>
    <div class="page-content">
        <h1>Instituição</h1>
        <p>Personalize informações sobre a instituição.</p>
        <h3>Colaboradores</h3>
        <p class="mb-7">Edite, exclua ou crie novos colaboradores </p>

      <div class="collaborators">
        <div class="container-collaborators-with-slide">
          <v-sheet width="100%">
            <v-slide-group show-arrows>
              <collaborators/>
          </v-slide-group>
          </v-sheet>
        </div>
        <div class="container-collaborators-without-slide">
          <collaborators/>
        </div>
      </div>

      <div :class="{containerButtonAdd: !collaborators}">
        <h3 v-if="!collaborators">Adicione o seu primeiro colaborador! :)</h3>
        <v-btn
          elevation="2"
          fab  
          class="info mb-5"
          @click="[changeDialog({'openDialog': true, 'newDialog': true})]"
        >
        <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>

      <aboutInstitution/>

    </div>
</template>

<script>
  import collaborators from './Collaborators'
  import aboutInstitution from './AboutInstitution'
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions, mapGetters } = createNamespacedHelpers('collaborator') 
  export default {
    components:{collaborators, aboutInstitution},
    computed:{
      ...mapGetters({collaborators:'readCollaborators'})
    },
    methods:{
      ...mapActions(['changeDialog']),
    }
  }
</script>

<style scoped>
  .container-collaborators-with-slide{
      display: none;
    }

  .containerButtonAdd{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(min-width: 480px){
  .container-collaborators-with-slide{
      display: block;
    }
  .container-collaborators-without-slide{
      display: none;
    }
  }

</style>