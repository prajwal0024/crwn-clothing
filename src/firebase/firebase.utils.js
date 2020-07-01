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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
