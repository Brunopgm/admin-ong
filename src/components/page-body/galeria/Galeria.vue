<template>
    <div class="page-content">
        <h1>Galeria</h1>
        <h3>Banner</h3>
        <p>Modifique as imagens presentes nos banner.</p>
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
        <imagesGalery/>
    </div>
</template>

<script>
import { read } from '@/services/foundation/page-body/galery/banner'
import banner from './Banner'
import imagesGalery from './ImagesGalery'

import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('banner')
export default {
    components: {banner, imagesGalery},
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
