import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD31IXpVJtvlNhyKXq08xshpKxMLCfji6I",
    authDomain: "mayyur-com.firebaseapp.com",
    projectId: "mayyur-com",
    storageBucket: "mayyur-com.appspot.com",
    messagingSenderId: "326225740766",
    appId: "1:326225740766:web:5509a23f7fa0260210d34f"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()
  
  const db = app.firestore()

  export default db