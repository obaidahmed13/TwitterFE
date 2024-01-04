import { api } from "../../config/api"
import { GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_SUCCESS } from "./ActionType";

const getAllTweets=()=>async (dispatch)=>{
    try {
        const {data} = await api.get("/api/tweets");
        console.log("get all tweets", data)
        dispatch({type: GET_ALL_TWEETS_SUCCESS, payload:data})
    } catch (error) {
        console.log("error")
        dispatch({type: GET_ALL_TWEETS_FAILURE, payload:error.message})
        
    }
}