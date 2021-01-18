<template>
    <div>
        <projectsCards
            :projetos='projects'
            :stateProject='stateProject'
        />
    </div>
</template>

<script>
import projectsCards from './ProjectsCards'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('projects')
export default {
    components:{projectsCards},
    computed:{
        ...mapGetters({projects:'readOngoingProjects'})
    },
    data:()=>({
        stateProject: 'ongoingProject'
    })    
}
</script>

<style>

</style>