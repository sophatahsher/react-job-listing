import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2EpIBrBthe5eRRmLnERKUCCHiH5s-MBQ",
  authDomain: "job365-3f712.firebaseapp.com",
  projectId: "job365-3f712",
  storageBucket: "job365-3f712.appspot.com",
  messagingSenderId: "329136883786",
  appId: "1:329136883786:web:9ad3b06a08d743f5bd3eb3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
