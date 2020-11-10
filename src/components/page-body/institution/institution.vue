<template>
    <div class="page-content">
        <h1 class="title">Instituição</h1>
        <p class="mb-7">Adicione/modifique colaboradores e personalize informações sobre a instituição.</p>

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

      <v-btn
        elevation="2"
        fab
        
      >
      <v-icon>mdi-plus</v-icon>
      </v-btn>

    </div>
</template>

<script>
  import collaborators from './collaborators'
  export default {
    components:{collaborators}
  }
</script>

<style>
  .container-collaborators-with-slide{
      display: none;
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