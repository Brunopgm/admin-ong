<template>
    <div class="page-content">
        <h1 class="title">Instituição</h1>
        <p>Adicione/modifique colaboradores e personalize informações sobre a instituição.</p>

      <div class="d-flex flex-wrap">
        <v-card
          class="mb-4 mr-3"
          width="344"
          outlined
          v-for="collaborator in collaborators" :key="collaborator.name"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-2">
                Colaborador
              </div>
              <v-list-item-title class="mb-1 collaborator-name">
                {{collaborator.name}}
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle-card">{{ collaborator.occupation }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="100"
              color="gray"
              class="image-collaborator"
            >
              <img :src="collaborator.photo">
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              text
            >
              Editar
            </v-btn>
          </v-card-actions>
        </v-card>


      </div>
    </div>
</template>

<script>
  export default {
    data:()=> ({
      collaborators:[
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

</style>