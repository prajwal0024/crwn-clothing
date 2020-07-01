import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDMBWmPFsAAkwbOtAtkjZawylxekEuGVgA",
  authDomain: "crwn-db-bd421.firebaseapp.com",
  databaseURL: "https://crwn-db-bd421.firebaseio.com",
  projectId: "crwn-db-bd421",
  storageBucket: "crwn-db-bd421.appspot.com",
  messagingSenderId: "683380727719",
  appId: "1:683380727719:web:75a6dea2cd2984bf856082",
}
firebase.initializeApp(config)

//After sign in check if user data present in firestore, if not then add new data
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return //if user is signed out then userAuth will be null, so exit function

  const userRef = firestore.doc(`users/${userAuth.uid}`) //getting the ref of users/uid
  const snapShot = await userRef.get() //getting snapshot

  if (!snapShot.exists) {
    //if user does not exsists
    const { displayName, email } = userAuth //destructing name and email from user
    const createdAt = new Date()

    try {
      await userRef.set({
        //adding new data
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log(`Error while creating user ${err.message}`)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
