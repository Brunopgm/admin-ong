<template>
    <div class="home">
        <div class="salutation">
            <h1>Admin Ong Próximo</h1>
            <span class="subtitle">Seja bem-vindo!</span>
            <img 
                src="../assets/logo-proximo.png" 
                alt="Logo da ONG"
                class="image-logo"
                >
            <span>Comece a gerênciar o seu site agora mesmo clicando no botão abaixo</span>
            <v-btn 
                class="info mt-5 py-6 button-start"
                @click="goHeader"
                >
                <v-icon>mdi-chevron-double-right</v-icon>
                Começar</v-btn>
        
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goHeader(){
           this.$router.push('/cabecalho')
        }
    }
}

</script>

<style scoped>
    .home{
        height: 100%;
    }

    .salutation{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .salutation h1{
        font-size: 1.8rem;
    }
    .subtitle{
        margin: initial;
        font-size: 1.2rem;
    }
    .salutation img{
        width: 95%;
        margin: 0 auto;
    }
    .button-start{
        margin: 0 auto;
        width: 60%;
    }


    @media(min-width: 570px){
        .salutation h1{
            
        }
        .salutation img{
            width: 80%;
        }
        .button-start{
            width: 30%;
        }   
    }
</style>