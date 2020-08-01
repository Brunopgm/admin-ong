<template>
    <div class="page-content">
        
       <v-icon 
            large
            class="ma-2 button-menu"
            @click="openCloseMenu">mdi-menu</v-icon>
       
        <h1>Seja bem vindo!</h1>
        <p>Aqui será o conteúdo da página</p>
    </div>
</template>

<script>

export default {
    data(){
        return {
            drawer: true
        }
    },
    methods:{
        openCloseMenu(){
            this.drawer = !this.drawer
            this.$emit('statusMenu', !this.drawer)
        }
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

@media(min-width: 960px){
    
}

</style>