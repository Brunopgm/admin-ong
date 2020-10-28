import FirebaseApp from "@/firebaseConfig"
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, logo) => {
    const referenceFile = storageReference.child(`footer/${logo}`)
    return await referenceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}


export const update = async () => {
    await FirebaseApp.db.collection("foundation").doc('footer').set({})
        .then(response => {
        response
    })
}

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('footer').get().then(response => {
        menu = response.data()
    })
    return menu
}