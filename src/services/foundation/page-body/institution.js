import FirebaseApp from "@/firebaseConfig"
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, nameFile)=>{
    const refereceFile = storageReference.child(`page-body/institution/${nameFile}`)
    return await refereceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}


export const update = async (collaborators) => {
    await FirebaseApp.db.collection("foundation").doc('institution').set({collaborators})
        .then(response => {
        response
    })
}

export const read = async () => {
    let collaborators = null
    await FirebaseApp.db.collection("foundation").doc('institution').get().then(response => {
        collaborators = response.data()
    })
    return collaborators
}
