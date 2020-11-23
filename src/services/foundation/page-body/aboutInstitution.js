import FirebaseApp from '@/firebaseConfig.js'
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, nameFile)=>{
    const refereceFile = storageReference.child(`page-body/aboutInstitution/${nameFile}`)
    return await refereceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}

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