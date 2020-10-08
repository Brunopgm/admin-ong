<template>
    <div class="page-content">
        <h1 class="title">Cabeçalho</h1>
        <p>Personalize o cabeçalho do site modificando imagens, cores e o link dos campos.</p>
        
        <tableFields/>
        <logoHeader @passarLogo="logoURL = $event"/>

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

        <!-- <transition name="fada" mode="out-in"> -->
            <!-- <div v-show="screen" :key="screen"> -->
                <preview 
                    :screen='screen' 
                    :readListFieldsMenu="readListFieldsMenu"
                    :logoURL='logoURL'
                    />
            <!-- </div> -->
            <!-- <div v-show="!screen" :key="screen">
                <preview 
                    :screen='screen' 
                    :read="read" 
                    />
            </div>
        </transition>     -->
    </div>
</template>

<script>
import { read } from "@/services/foundation/header"
import tableFields from './TableFields'
import preview from './Preview'
import logoHeader from './LogoHeader'


export default {
    components:{tableFields,preview, logoHeader},
    data(){
        return {
            drawer: true,
            readListFieldsMenu: null,
            screen: '',
            logoURL:'' 
        }
    },
    async created(){
        const response = await read()
        this.readListFieldsMenu = response
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