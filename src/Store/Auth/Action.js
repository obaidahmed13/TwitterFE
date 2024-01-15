import { API_BASE_URL, api } from "../../config/api"
import axios from 'axios'
import { CLEAR_SEARCH_SUCCESS, FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_SUCCESS, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, SEARCH_USER_FAILURE, SEARCH_USER_SUCCESS, UNFOLLOW_USER_FAILURE, UNFOLLOW_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from "./ActionType"

import { GOOGLE_LOGIN_FAILURE, GOOGLE_LOGIN_SUCCESS } from '../../Store/Auth/ActionType'


export const loginUser = (loginData)=> async(dispatch)=> {
    
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData)
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
            dispatch({type:LOGIN_USER_SUCCESS, payload:data.jwt})
            axios.create({
                baseURL: API_BASE_URL,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                    "Content-Type":"application/json"
                }
            })
        }else {
            dispatch({ type: LOGIN_USER_FAILURE, payload: 'Token not received' });
          }

    } catch (error) {
        console.log("error", error)
        dispatch({type:LOGIN_USER_FAILURE, payload:error.message})
        
    }
    
}

export const registerUser = (registerData)=> async(dispatch)=> {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, registerData)
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }
        dispatch({type:REGISTER_USER_SUCCESS, payload:data.jwt})
    } catch (error) {
        console.log("error", error)
        dispatch({type:REGISTER_USER_FAILURE, payload: error.message})
        
    }
}

export const getUserProfile = ()=> async(dispatch)=> {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type":"application/json"
            }
        })
        dispatch({type: GET_USER_PROFILE_SUCCESS, payload:data})
    } catch (error) {
        console.log("error", error)
        dispatch({type:GET_USER_PROFILE_FAILURE, payload: error.message})
        
    }
}

export const findUserById = (userId)=> async(dispatch)=> {
    try {
        const {data} = await api.get(`/api/users/${userId}`)
        dispatch({type: FIND_USER_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        console.log("error", error)
        dispatch({type:FIND_USER_BY_ID_FAILURE, payload: error.message})
        
    }
}

export const updateUserProfile = (reqData)=> async(dispatch)=> {
    try {
        const {data} = await api.put(`/api/users/update`, reqData)
        dispatch({type: UPDATE_USER_SUCCESS, payload:data})
    } catch (error) {
        console.log("error", error)
        dispatch({type:UPDATE_USER_FAILURE, payload: error.message})
        
    }
}

export const followUser = (userId)=> async(dispatch)=> {
    try {
        const {data} = await api.put(`/api/users/${userId}/follow`)
        console.log(data, "FOLLOW USER DATAAAAAAAAAAAAAAA")

        dispatch({type: FOLLOW_USER_SUCCESS, payload:data})
        
        
    } catch (error) {
        console.log("error", error)
        dispatch({type:FOLLOW_USER_FAILURE, payload: error.message})
        
    }
}

export const searchUser = (query)=> async(dispatch)=> {
    try {
        const {data} = await api.get(`/api/users/search?query=${encodeURIComponent(query)}`);
        dispatch({type: SEARCH_USER_SUCCESS, payload:data})
    } catch (error) {
        console.log("error", error)
        dispatch({type:SEARCH_USER_FAILURE, payload: error.message})
    }
}


export const logout = ()=> async(dispatch)=> {
    localStorage.removeItem("jwt")
    dispatch({type: LOGOUT, payload:null})
    
}

export const googlelogin= (result)=> async (dispatch ) => {
    try {
        const data = await axios.post(`${API_BASE_URL}/auth/google/signin`, {
            fullName: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
            password: result.user.uid,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (data.data.jwt) { 
            localStorage.setItem("jwt", data.data.jwt);
            dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: data.data.jwt });
            console.log("Successful login !!!!!!!!!!!!");
        } else {
            console.log("JWT not found in the response:", data);
            dispatch({ type: GOOGLE_LOGIN_FAILURE, payload: "JWT not found in the response" });
        }
    } catch (error) {
        console.log("error", error)
        dispatch({type:GOOGLE_LOGIN_FAILURE, payload:error.message})
    }

}

export const unfollowUser =(userId)=> async(dispatch)=> {
    try {
        const {data} = await api.put(`/api/users/${userId}/follow`)
        dispatch({type: UNFOLLOW_USER_SUCCESS, payload:data.id})
    } catch (error) {
        console.log("error", error)
        dispatch({type:UNFOLLOW_USER_FAILURE, payload: error.message})
        
    }
}

export const clearSearch = () => (dispatch) =>{
    dispatch({type: CLEAR_SEARCH_SUCCESS})
}