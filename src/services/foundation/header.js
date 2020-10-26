import FirebaseApp from "@/firebaseConfig"
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (selectedFile, logoHeader) => {
    const referenceFile = storageReference.child(`header/${logoHeader}`)
    await referenceFile.put(selectedFile)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url => url)
}

export const create = async (menu) => {
    await FirebaseApp.db.collection("foundation").doc("header").set({menu}).then(response => {
        response
    })  
}

export const update = async () => {
            await FirebaseApp.db.collection("foundation").doc('header').set({})
                .then(response => {
                response
            })
        }

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('header').get().then(response => {
        menu = response.data()
    })
    return menu
}
