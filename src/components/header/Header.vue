<template>
    <div class="page-content">
        <h1 class="title">Cabeçalho</h1>
        <p>Personalize o cabeçalho do site modificando imagens, cores e o link dos campos.</p>
        
        <tableFields/>
        <logoHeader @logo="logoURL = $event"/>

        <h3 class="subtitle">Visualizar as alterações no site</h3>
        <p>É possível visualizar as alterações clicando abaixo no tipo de dispositívo.</p>

        <v-tabs
            background-color="white"
            color="grey"
            grey
        >
            <v-tab @click="screen = ''">
                Celular
            </v-tab>    
            <v-tab class="hides-preview-on-the-mobile" @click="screen = 'desktop'">
                Computador/Tablet
            </v-tab>
        </v-tabs>

        <preview 
            :screen='screen' 
            :readListFieldsMenu="listArray"
            :logoURL='logoURL'
            />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { read } from "@/services/foundation/header"
import tableFields from './TableFields'
import preview from './Preview'
import logoHeader from './LogoHeader'

const { mapGetters } = createNamespacedHelpers('listFieldsMenu')
export default {
    components:{preview, logoHeader, tableFields},
    data(){
        return {
            drawer: true,
            screen: '',
            logoURL:'' 
        }
    },
    computed:{
        ...mapGetters({
            listArray : 'readList'
        })
    },
    async created(){
        const response = await read()
        this.$store.state.listFieldsMenu.readListFieldsMenu = response
    }
}
</script>

<style>
.page-content{
    height:100%;
    width: 100%;
}
.button-menu::after{
    background-color: transparent;
}
.title{
    font-size: 1.6em;
}

.hides-preview-on-the-mobile{
    display: none !important;
}

.subtitle{
    margin: 2.5rem 0 0.5rem 0;
    font-weight: 500;
}


@media(min-width: 860px){
    .hides-preview-on-the-mobile{
        display: flex !important;
    }
}
</style>