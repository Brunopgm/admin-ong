import FirebaseApp from "@/firebaseConfig"
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadImage = async (event, nameImage) => {
    const referenceFile = storageReference.child(`page-body/galery/${nameImage}`)
    return await referenceFile.put(event)
}

export const downloadImage = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}

export const deletePhotoStorage = async(idPhoto) => {
    const referenceFile = storageReference.child(`page-body/galery/image-${idPhoto}`)
    return await referenceFile.delete()
}

export const update = async (galery) => {
    await FirebaseApp.db.collection("foundation").doc('galeryImages').set({galery})
        .then(response => {
        response
    })
}

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('galeryImages').get().then(response => {
        menu = response.data()
    })
    return menu
}
