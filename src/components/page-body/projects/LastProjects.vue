<template>
    <div>
        <projectsCards
            v-for="project in projects"
            :key="project.title"
            :image='project.image'
            :title='project.title'
            :text='project.text'
            :featured='project.featured'
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
        ...mapGetters({projects:'readLastProjects'})
    }
}
</script>

<style>

</style>