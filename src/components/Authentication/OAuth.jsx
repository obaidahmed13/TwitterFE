
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import React from 'react'
import { app } from '../../firebase'
import { useDispatch } from 'react-redux'
import { googlelogin } from '../../Store/Auth/Action'

export default function OAuth() {
    const dispatch = useDispatch()
    const handleGoogleClick = async()=>{
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        try {
            dispatch(googlelogin(result))
            
        } catch (error) {
            console.error("Error signing in with google", error);
            
        }
    }
   
  return (
    <div>
        <button type='button' onClick={handleGoogleClick} >Sign in with Google</button>
    </div>
  )
}
