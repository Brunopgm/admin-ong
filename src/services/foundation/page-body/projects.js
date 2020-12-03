import FirebaseApp from '@/firebaseConfig.js'


export const read = async () => {
    let fields = null
    await FirebaseApp.db.collection('foundation').doc('projects').get().then((response)=>{
        fields = response.data()
    })
    return fields
}