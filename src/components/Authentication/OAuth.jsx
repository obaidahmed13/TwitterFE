
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
        try {
            dispatch(googlelogin(result))
            
        } catch (error) {
            console.error("Error signing in with google", error);
            
        }
    }
   
  return (
    <div>
        <button type='button' className='rounded-full border-2 p-2 border-red-100 w-full hover:bg-slate-50 ' onClick={handleGoogleClick} >Sign in with Google</button>
    </div>
  )
}
