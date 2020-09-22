<template>
    <div class="home">
        <div class="salutation">
            <h1>Admin Ong Próximo</h1>
            <span>Seja bem-vindo!</span>
        </div>
    </div>
</template>

<script>
import FirebaseApp from "../firebaseConfig"


export default {
    created() {
        console.log(FirebaseApp)
        // const menu = [
        //     {title: 'Home', url: '/home'},
        //     {title: 'Sobre nós', url: '/sobre'},
        //     {title: 'Projetos e ações', url: '/projetos-acoes'},
        //     {title: 'Voluntários', url: '/voluntarios'},
        //     {title: 'Sobre nós', url: '/contatos'}]
        

        //  const update = async () => {
        //     await FirebaseApp.db.collection("users").doc('2NZePxJ7KU9UF9LD8UPt').set({name: 'BB'}).then(response => {
        //         console.log('update', response)
        //     })
        // }

        

        // create()
        // read()
        // update()
        // remove()


    }

}

</script>

<style>
    .home{
        height: 100%;
        
    }

    .salutation{
        text-align: center;
        display: flex;
        flex-direction: column;
        
    }

</style>