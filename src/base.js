import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAowkWdbtKOlzRKJ6z8XwvTVRW8R9SpbxE",
    authDomain: "recette-app-67c4e.firebaseapp.com",
    databaseURL: "https://recette-app-67c4e-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
