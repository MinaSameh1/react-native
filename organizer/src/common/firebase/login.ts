import { UserError } from '../../utils/UserError'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function Login(email: string, pass: string) {
  if (email.length < 6 || pass.length < 6)
    throw new UserError('Username or pass too short!')
  try {
    const auth = getAuth()
    const info = await signInWithEmailAndPassword(auth, email, pass)
    console.log(info)
    await AsyncStorage.setItem('@email', email)
  } catch (e) {
    if (e instanceof FirebaseError)
      switch (e.code) {
        case 'auth/invalid-email':
          throw new UserError('Email Doesnt Exist!')
        case 'auth/wrong-password':
          throw new UserError('You have entered the wrong password.')
        default:
          console.log(e.message)
          console.log(e.code)
          throw new UserError('Something went wrong try again later')
      }
    throw e // throw unknown errors for now
  }
}
