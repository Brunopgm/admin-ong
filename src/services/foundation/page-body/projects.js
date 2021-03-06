import FirebaseApp from '@/firebaseConfig.js'
import firebase from "firebase"

const storageReference = firebase.storage().ref()

export const read = async () => {
    let fields = null
    await FirebaseApp.db.collection('foundation').doc('projects').get().then((response)=>{
        fields = response.data()
    })
    return fields
}

export const update = async (allProjects) => {
    await FirebaseApp.db.collection("foundation").doc('projects').set({allProjects})
        .then(response => {
        response
    })
}

export const uploadFile = async (event, image, stateProject) => {
    const referenceFile = storageReference
        .child(`page-body/projects/${stateProject}/${image}`)
    return await referenceFile.put(event)
}

export const downloadFile = (path) => {
    return storageReference.child(path).getDownloadURL()
        .then(url =>url)
}

export const deleteImage = async(stateProject, nameFile) => {
    const referenceFile = storageReference.child(`page-body/projects/${stateProject}/${nameFile}`)
    return await referenceFile.delete()
}

