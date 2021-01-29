import firebase from "firebase"

export const submitUserData = async (email, password) => {
  await firebase.auth().signInWithEmailAndPassword(email, password)  
}

export const signOutUser = () => {
  firebase.auth().signOut()
}


