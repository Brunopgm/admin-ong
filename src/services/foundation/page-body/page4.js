import FirebaseApp from '@/firebaseConfig.js'
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, logo)=>{
    console.log(logo);
    const refereceFile = storageReference.child(`page-body/page-4/${logo}.png`)
    return await refereceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}

export const read = async () => {
    let menu = null
    await FirebaseApp.db.collection("foundation").doc('page-body').get().then(response => {
        menu = response.data()
    })
    return menu
}


