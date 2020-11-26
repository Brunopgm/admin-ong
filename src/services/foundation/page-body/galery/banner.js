import FirebaseApp from "@/firebaseConfig"
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, image) => {
    const referenceFile = storageReference.child(`page-body/galery/banner/${image}`)
    return await referenceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}


export const update = async (banner) => {
    await FirebaseApp.db.collection("foundation").doc('contentBanner').set({banner})
        .then(response => {
        response
    })
}

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('contentBanner').get().then(response => {
        menu = response.data()
    })
    return menu
}