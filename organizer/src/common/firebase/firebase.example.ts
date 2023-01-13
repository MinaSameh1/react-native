import { initializeApp } from 'firebase/app'

// TODO: Add appCheck or security rules.
// For now don't upload fbConfig to git
const firebaseConfig = {
  apiKey: 'key',
  authDomain: 'key',
  projectId: 'key',
  storageBucket: 'key',
  messagingSenderId: 'key',
  appId: 'key'
}

initializeApp(firebaseConfig)
