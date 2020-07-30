

<template>
    <div><p>Olá mundo</p></div>
</template>

<script>
import FirebaseApp from "../firebaseConfig"


export default {
    created() {
        console.log(FirebaseApp)
        const menu = [{title: 'Home', url: '/home'},{title: 'Sobre nós', url: 'about'}]
        const create = async () => {
            await FirebaseApp.db.collection("home").doc("menu").set({menu}).then(response => {
                console.log('create', response)
            })
        }

        //  const update = async () => {
        //     await FirebaseApp.db.collection("users").doc('2NZePxJ7KU9UF9LD8UPt').set({name: 'BB'}).then(response => {
        //         console.log('update', response)
        //     })
        // }

        const read = async () => {
            await FirebaseApp.db.collection("home").doc('menu').get().then(response => {
                const { menu } = response.data()
                console.log(menu)
                // response?.forEach(element => {
                //     const user = element?.data()
                //     console.log(user)
                // });
            })
        }

        create()
        read()
        // update()
        // remove()


    }

}

</script>

<style>

</style>