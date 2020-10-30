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
                @click="[isEditing = !isEditing]"
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

            
            <v-text-field
                :disabled="!isEditing"
                color="black"
                label="Endereço"
                v-model='readContactInformation.address'
            ></v-text-field>

            <v-text-field
                    :disabled="!isEditing"
                    color="black"
                    label="E-mail"
                    type="email"
                    v-model="readContactInformation.email"
            ></v-text-field>
                        
            <div class="phones">
                <v-text-field
                    v-if="readContactInformation.phones"
                    class="mr-3"
                    :disabled="!isEditing"
                    color="black"
                    type="tel"
                    label="Telefone 1"
                    v-model="readContactInformation.phones.firstPhone"
                ></v-text-field>
                <v-text-field
                    v-if="readContactInformation.phones"
                    :disabled="!isEditing"
                    color="black"
                    type="tel"
                    label="Telefone 2"
                    v-model="readContactInformation.phones.secondPhone"
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
                color="success"
                >
                Seus dados foram salvos
            </v-snackbar>
        </v-card>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { create } from '@/services/foundation/page-body/page4'

const { mapGetters } = createNamespacedHelpers('page4') 
export default {
    props:{
        listContactData:{
            default: null
        }
    },
    data () {
      return {
        hasSaved: false,
        isEditing: null,
      }
    },
    computed:{
        ...mapGetters({readContactInformation: 'listContactInformation'})
    },
    methods: {
        save () {
            this.isEditing = !this.isEditing
            this.hasSaved = true
            this.uploadContactData(this.readContactInformation)
        },
        async uploadContactData(newContactInformation){
            await create(newContactInformation)
    }
    }
  }
</script>
<style>
@media(min-width: 600px){
    .phones{
        display: flex;
    }
}
</style>