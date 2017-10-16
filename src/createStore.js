import * as firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyA0rWn7manCyEI4ySbD5HLr2CCJxPyR4yQ",
    authDomain: "create-react-app-demo-1.firebaseapp.com",
    databaseURL: "https://create-react-app-demo-1.firebaseio.com",
    projectId: "create-react-app-demo-1",
    storageBucket: "create-react-app-demo-1.appspot.com",
    messagingSenderId: "477996438350"
}
firebase.initializeApp(config)

const db = firebase.firestore()
export default db