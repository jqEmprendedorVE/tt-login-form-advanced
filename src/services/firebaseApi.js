import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseApi = {
  db: () => firebase.database(),
  firestore: () => firebase.firestore(),
  auth: () => firebase.auth()
}

export default function (options) {
  if (!firebase.apps.length) firebase.initializeApp(options)
  Vue.prototype.$firebase = FirebasePlugin
  return firebaseApi;
}