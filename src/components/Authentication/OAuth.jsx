
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import React from 'react'
import { app } from '../../firebase'
import { useDispatch } from 'react-redux'
import { GOOGLE_LOGIN_FAILURE, GOOGLE_LOGIN_SUCCESS } from '../../Store/Auth/ActionType'
import { API_BASE_URL } from '../../config/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider)
            console.log(result)
            const data = await axios.post(`${API_BASE_URL}/auth/google`, {
                fullName: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt)
            }
            dispatch({type:GOOGLE_LOGIN_SUCCESS, payload:data.jwt})
            navigate("/home")
            
        } catch (error) {
            console.log("error", error)
            dispatch({type:GOOGLE_LOGIN_FAILURE, payload:error.message})
        }

    }
  return (
    <div>
        <button type='button' onClick={handleGoogleClick} >Sign in with Google</button>
    </div>
  )
}
