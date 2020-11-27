import FirebaseApp from "@/firebaseConfig"

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('galeryImages').get().then(response => {
        menu = response.data()
    })
    return menu
}