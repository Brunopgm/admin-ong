import FirebaseApp from '@/firebaseConfig.js'

export const read = async () => {
    let fields = null
    await FirebaseApp.db.collection("foundation").doc('aboutInstitution').get().then(response => {
        fields = response.data()
    })
    return fields
}

export const create = async (fields) => {
    await FirebaseApp.db.collection("foundation").doc("aboutInstitution").set({fields}).then(response => {
        response
    })  
}