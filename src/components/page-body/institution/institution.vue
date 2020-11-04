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
    </div>
</template>

<script>
  import collaborators from './collaborators'
  export default {
    components:{collaborators},
    data:()=> ({
      collaborators:[
        {
          name: 'Matheus Escudeiro', 
          occupation: 'Presidente do Próximo',
          photo: 'https://i.pinimg.com/originals/c2/bb/f1/c2bbf1e1ff2e4c704789989f8adfbc22.jpg'
        },
        {
          name: 'Matheus Escudeiro', 
          occupation: 'Presidente do Próximo',
          photo: 'https://i.pinimg.com/originals/c2/bb/f1/c2bbf1e1ff2e4c704789989f8adfbc22.jpg'
        },
        {
          name: 'Naruto Uzumaki', 
          occupation: 'Atual hokage de Konohagakure',
          photo: 'https://i.pinimg.com/originals/c2/bb/f1/c2bbf1e1ff2e4c704789989f8adfbc22.jpg'
        },
        {
          name: 'Sasuke Uchiha', 
          occupation: 'Ninja investigador',
          photo: 'https://nerdhits.com.br/wp-content/uploads/2020/08/sasuke-uchiha-1024x576.jpg'
        }
        
      ]
    })
  }
</script>
<style>
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