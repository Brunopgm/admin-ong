<template>
    <div class="page-content">
        <h1 class="title">Contato e formulários</h1>
        <p>Defina os dados para contato e os textos dos formulários</p>

        <template>
            <v-tabs>
                <v-tab @click="component = 'contact'">Contatos</v-tab>
                <v-tab @click="component = 'formsText'">Formulários</v-tab>
                <v-tab @click="component = 'formsText'">Componente</v-tab>
            </v-tabs>
        </template>
        <component 
            :is="component" 
            >
        </component>
    </div>
</template>

<script>
import formsText from './formsText'
import contact from './contact'


export default {
    components: { contact, formsText},
    data(){
        return{
            listContactData: null,
            component: contact
        }
    }
}
  
</script>
