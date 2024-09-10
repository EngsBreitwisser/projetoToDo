import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzthd82yH4zcYjJbX6MoMB3umFTI5KVUA",
    authDomain: "atividadetodolist.firebaseapp.com",
    projectId: "atividadetodolist",
    storageBucket: "atividadetodolist.appspot.com",
    messagingSenderId: "606804972187",
    appId: "1:606804972187:web:48a56d5658d0ffd2236c3e",
    measurementId: "G-21VD9MJBP6"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth};