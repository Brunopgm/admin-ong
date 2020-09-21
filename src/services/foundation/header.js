import FirebaseApp from "@/firebaseConfig"

export const create = async (menu) => {
    await FirebaseApp.db.collection("foundation").doc("header").set({menu}).then(response => {
        console.log('create', response)
    })
    
}

// export const update = async () => {
//             await FirebaseApp.db.collection("foundation").doc('header').set({}).then(response => {
//                 console.log('update', response)
//             })
//         }

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('header').get().then(response => {
        menu = response.data()
        
        // response?.forEach(element => {
        //     const user = element?.data()
        //     console.log(user)
        // });
    })
    return menu
}
