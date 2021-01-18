<template>
    <div class="page-content">
        <h1>Projetos e ações</h1>
        <p>Personalize o rodapé modificando os links e as imagens dos icones de redes sociais e logo.</p>
        
        <template>
            <v-tabs>
                <v-tab @click="component = 'lastProjects'">últimos</v-tab>
                <v-tab @click="component = 'ongoingProjects'">Em andamento</v-tab>
            </v-tabs>
        </template>
        <component :is="component"/>
        
    </div>
</template>

<script>
import lastProjects from './LastProjects'
import ongoingProjects from './OngoingProjects'
import { read } from '@/services/foundation/page-body/projects'


import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('projects') 
export default {
    components: {lastProjects, ongoingProjects},
    data(){
        return{
            component: lastProjects
        }
    },
    methods:{
        ...mapActions(['changeAllProjects', ])
    },
    async created(){
        const response = await read()
        const allProjects = response.allProjects
        this.changeAllProjects(allProjects)
    }
}
</script>

<style>
    

</style>