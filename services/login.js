import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../FirebaseConfig"
import { Alert } from "react-native"

export const login = async(email, pass) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass)
    const user = res.user
    
    return user
  } catch (error) {
    Alert.alert(error.code)
  }
}
