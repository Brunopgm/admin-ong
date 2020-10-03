<template>
    <div class="page-content">
        <h1 class="title">Cabeçalho</h1>
        <p>Personalize o cabeçalho do site modificando imagens, cores e o link das abas.</p>
        <tableFields/>
        <imageColors/>
        <hr><br>
        <div class="d-flex">
            <div class="my-2" @click="screen = ''">
                <v-btn>Mobile</v-btn>
            </div>
            <div class="hidesPreviewOnTheMobile my-2" @click="screen = 'desktop'">
                <v-btn>Desktop</v-btn>
            </div>
        </div>
        <preview :screen='screen' :read="read"/>
    </div>
</template>

<script>
import { read } from "@/services/foundation/header"
import tableFields from './tableFields'
import imageColors from './ImageColors'
import preview from './Preview'

export default {
    components:{tableFields, imageColors,preview},
    data(){
        return {
            drawer: true,
            read: null,
            screen: ''    
        }
    },
    methods:{
        openCloseMenu(){
            this.drawer = !this.drawer
            this.$emit('statusMenu', !this.drawer)
        }
    },
    async created(){
        const response = await read()
        this.read = response
}
}
</script>

<style scoped>
.page-content{
    height:100%;
    width: 100%;
}
.button-menu::after{
    background-color: transparent;
}
.title{
    font-size: 1.6em !important;
}

.hidesPreviewOnTheMobile{
    display: none;
}

@media(min-width: 860px){
    .hidesPreviewOnTheMobile{
        display: inline-block;
    }
}
</style>