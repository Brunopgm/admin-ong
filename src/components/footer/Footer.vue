<template>
    <div class="page-content">
        <h1>Rodapé</h1>
        <p>Personalize o rodapé modificando os links e as imagens dos icones de redes sociais e logo.</p>

        <div v-show="showLoading" class="container-image-loading">
                <img class="imageLoading" src="https://firebasestorage.googleapis.com/v0/b/ong-proximo.appspot.com/o/loading%2Flogo-ong.png?alt=media" alt="Logo de carregamento dos card's">
                <h2 class="loading-title">Carregando aguarde...</h2>
        </div>
        
        <div class="container-cards-images">
            <cardsImages 
                v-show="!showLoading"
                v-for="(item, indexItem) in readListUrlImage"
                :key="item.image"
                :image='item.image'
                :url='item.url'
                :indexItem='indexItem'
                />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import cardsImages from './CardsImagesFooter'
import { read } from '@/services/foundation/footer'

const { mapGetters } = createNamespacedHelpers('footerListUrlImage')
export default {
    components: {cardsImages},
    data: () =>({
        showLoading: true
    }),
    computed:{
        ...mapGetters({readListUrlImage :'readList'})
    },
    async created(){
        const response = await read()
        this.$store.state.footerListUrlImage.readListURLImage = response.imagesUrlFooter
        this.showLoading = false
    } 
}
</script>

<style>
    .container-image-loading{
        width: 100%;
        display: flex;
        flex-direction: column    
    }
    .imageLoading{
        margin: 0 auto;
        animation: move 1s infinite ;
    }

    .loading-title{
        text-align: center;
    }

    @keyframes move{
        0% {width:55%}
        50% {width:60%}
        55% {width:70%}
        100% {width:55%}
    }
   
    @media(min-width: 860px){
        .container-cards-images{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 2rem 0;
        }
        .imageLoading{
            width: 50%;
        }

        .container-image-loading{
            width: 40%;
            margin: 0 auto;   
        }
    }

</style>