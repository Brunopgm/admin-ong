<template>
    <div class="page-content">
        <h1 class="title">Contato e formulários</h1>
        <p>Defina os dados para contato e os textos dos formulários</p>

        <template>
            <v-tabs>
                <v-tab @click="component = 'contactLogos'">Contatos</v-tab>
                <v-tab @click="component = 'formsText'">Formulários</v-tab>
            </v-tabs>
        </template>
               
        <component 
            :is="component" 
            :listContactData='listContactData'>
        </component>
    </div>
</template>

<script>
import formsText from './formsText'
import contactLogos from './contact-logos'

import { createNamespacedHelpers } from 'vuex'
import { read } from '@/services/foundation/page-body/page4'

const { mapActions } = createNamespacedHelpers('page4')
export default {
    components: { contactLogos, formsText},
    data(){
        return{
            listContactData: null,
            component: contactLogos
        }
    },
    methods:{
        ...mapActions(['changeContactInformation'])
    },
    async created(){
        const response = await read()
        this.listContactData = response.contactInformation
        this.changeContactInformation(response.contactInformation)
    } 
}
  
</script>
