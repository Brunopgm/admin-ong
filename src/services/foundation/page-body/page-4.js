import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const uploadFile = async (event, logo)=>{
    const refereceFile = storageReference.child(`page-body/page-4/${logo}`)
    return await refereceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}

