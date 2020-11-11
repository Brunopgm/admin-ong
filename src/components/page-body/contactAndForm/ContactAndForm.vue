<template>
    <div class="page-content">
        <h1 class="title">Contato e formulários</h1>
        <p>Defina os dados para contato e os textos dos formulários</p>

        <template>
            <v-tabs>
                <v-tab @click="component = 'contact'">Contatos</v-tab>
                <v-tab @click="component = 'formsText'">Formulários</v-tab>
            </v-tabs>
        </template>
        <component :is="component"/>
    </div>
</template>

<script>
import formsText from './FormsText'
import contact from './Contact'


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

<style scoped>

</style>
