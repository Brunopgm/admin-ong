<template>
    <div class="page-content">
        <h1>Galeria</h1>
        <p>Modifique as imagens presentes nos banner, galeria do site e vídeos.</p>
        <div class="container-card">
            <banner
                v-for="(field,indexItem) in bannerFields"
                :key="field.image"
                :image='field.image'
                :text='field.text'
                :title='field.title'
                :indexItem='indexItem'
                />
        </div>
    </div>
</template>

<script>
import { read } from '@/services/foundation/page-body/galery/banner'
import banner from './Banner'

import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('banner')
export default {
    components: {banner},
    computed:{
        ...mapGetters({bannerFields:'readBannerFields'})
    },
    methods:{
        ...mapActions(['changeBannerFields'])
    },
    async created(){
        const response = await read()
        this.changeBannerFields(response.banner)
    }
}
</script>

<style scoped>
    .container-card{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    @media(min-width: 740px){
        .container-card{
            flex-direction: row;       
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 2rem 0;
    }
    }

</style>>
