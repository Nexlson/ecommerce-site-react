import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const fireBaseConfig = {
    apiKey: "AIzaSyDMjMWWa5blqVS6HhqqsCylGJQ5vJ3wQ-w",
    authDomain: "crwn-project-d0a93.firebaseapp.com",
    projectId: "crwn-project-d0a93",
    storageBucket: "crwn-project-d0a93.appspot.com",
    messagingSenderId: "307714997208",
    appId: "1:307714997208:web:fd7733ff324a3604dd90ad",
    measurementId: "G-7HLVRQBJHH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    // if not exist on db
    if (!snapShot.exists){
        const {displayName, email} = userAuth
        const createAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(error){
            console.log("Error creating user", error.message)
        }
    }
    return userRef
}

firebase.initializeApp(fireBaseConfig)

// export to anywhere will be using auth / firestore
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

// Allow select account when sign in
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase