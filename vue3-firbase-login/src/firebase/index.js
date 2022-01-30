// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_cftTghb9afiRl2YwO4FywWp19GwFibY',
  authDomain: 'vue-fire-auth-d07f7.firebaseapp.com',
  projectId: 'vue-fire-auth-d07f7',
  storageBucket: 'vue-fire-auth-d07f7.appspot.com',
  messagingSenderId: '657950541086',
  appId: '1:657950541086:web:e99003b3a27c81c347f50f'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
