import React, { useEffect } from 'react'
import BackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import TweetCard from '../Main/TweetCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findTweetsById } from '../../Store/Tweet/Action';

export default function TweetDetails() {

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const dispatch = useDispatch()
    const {id} = useParams()
    const {tweet} = useSelector(store=>store)
    useEffect(()=>{
        if(id){
            dispatch(findTweetsById(id))
        }
    },[ id])

    if(!tweet.tweet) {
        return null;
    }
    const replyTweets = tweet.tweet.replyTweets || [];


  return (
    <React.Fragment>
        <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-90">
        <BackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tweet</h1>
      </section>
      <section>
        <TweetCard item={tweet.tweet}/>
        <Divider sx={{margin:"2rem 0rem"}}/>
      </section>
      <section>
        {replyTweets.map((item)=> <TweetCard item={item}/>)}
        
      </section>


    </React.Fragment>
  )
}
