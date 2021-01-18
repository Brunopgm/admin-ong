<template>
    <div>
        <projectsCards
            :projetos='projects'
            :stateProject='stateProject'
        />
        <div :class="{containerButtonAdd: !projects}">
            <h3 v-if="!projects">Adicione o seu primeiro colaborador! :)</h3>
        </div>
    </div>
</template>

<script>
import projectsCards from './ProjectsCards'


import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('projects')
export default {
    components:{projectsCards},
    computed:{
        ...mapGetters({projects:'readLastProjects'})
    },
    data(){
        return{
            stateProject: 'lastProjects'
        }
    }
}
</script>

<style>

</style>