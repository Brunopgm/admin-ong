<template>
    <div class="page-content">
        <h1 class="title">Cabeçalho</h1>
        <p>Personalize o cabeçalho do site modificando imagens, cores e o link das abas. </p>
        <tableFields/>
        <imageColors/>
        <hr><br>
        <preview :read='read'/>
    </div>
</template>

<script>
import { read } from "@/services/foundation/header"
import preview from './Preview'
import tableFields from './tableFields'
import imageColors from './ImageColors'

export default {
    components:{tableFields, imageColors, preview},
    data(){
        return {
            drawer: true,
            read: null
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
        // console.log(response);
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
</style>