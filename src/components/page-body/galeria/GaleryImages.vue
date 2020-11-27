<template>
    <div class="container">
        <h3>Galeria de fotos</h3>
        <p>Altere as fotos da galeria do site.</p>

        <v-row>
            <v-col
            v-for="galery in imagesGalery"
            :key="galery.id"
            class="d-flex child-flex"
            cols="4"
            >
                <v-img
                    :src="galery.image"
                    aspect-ratio="1"
                    class="grey lighten-2 image"
                    width="100%"
                >
    
                <v-icon right class='icone-close' color="red">mdi-close-circle</v-icon>
            
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import { read } from '@/services/foundation/page-body/galery/galeryImages'
export default {
    data(){
        return{
            imagesGalery: null
        }
    },
    async created(){
        const response = await read()
        this.imagesGalery = response.galery
    }
    
}
</script>

<style scoped>
    
    .icone-close{
        position: absolute;
        right: 0px;
        cursor: pointer;
    }

</style>