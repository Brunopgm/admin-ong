<template>
    <div>
        <v-card
            class="overflow-hidden"
            color="white"   
            width="100%"
        >
            <v-toolbar
            flat
            color="grey white--text"
            >
            
            <v-toolbar-title class="font-weight-light">
                Informações de contato
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                color="grey lighten-3"
                fab
                small
                @click="isEditing = !isEditing"
            >
                <v-icon v-if="isEditing">
                mdi-close
                </v-icon>
                <v-icon v-else>
                mdi-pencil
                </v-icon>
            </v-btn>
            </v-toolbar>
            <v-card-text>

            <div class="d-flex mt-3">
                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="Lagradouro"
                    v-model='address.street'
                ></v-text-field>

                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="Bairro"
                    v-model='address.neighborhood'
                ></v-text-field>
            </div>

            <div class="d-flex mb-3">
                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="Cidade"                    
                ></v-text-field>

                <v-text-field
                    class="mr-3 ml-3"
                    :disabled="!isEditing"
                    color="black"
                    label="Número"
                ></v-text-field>
                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="CEP"
                ></v-text-field>
                
            </div>
            <v-divider></v-divider>
            

            
            <div class="d-flex mt-3">
                <v-text-field
                    class="mr-2"
                    :disabled="!isEditing"
                    color="black"
                    type="tel"
                    label="Telefone 1"
                ></v-text-field>
                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    type="tel"
                    label="Telefone 2"
                ></v-text-field>
            </div>

             <div class="d-flex">
                <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="E-mail"
                    type="email"
                ></v-text-field>

            </div>





            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!isEditing"
                        color="success"
                        @click="save"
                    >
                        Salvar
                    </v-btn>
            </v-card-actions>
            <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
                >
                Seus dados foram salvos
            </v-snackbar>
        </v-card>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        address: {
            street:'Rua achiles beline',
            neighborhood: 'Padroeira',
            number: 420,
            
            }
      }
    },
    methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>
<style>
</style>