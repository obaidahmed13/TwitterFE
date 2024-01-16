import React, { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Button, Tab } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarMonth'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TweetCard from "../Main/TweetCard";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { findUserById, followUser, unfollowUser } from "../../Store/Auth/Action";
import {  findTweetsByUserLikes, getUsersTweet } from "../../Store/Tweet/Action";



export default function Profile() {
  const [tabValue, setTabValue] = useState("1")
  const navigate = useNavigate();
  const {auth, tweet } = useSelector((store)=>store)
  const handleBack = () => navigate(-1);
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=> {
    dispatch(getUsersTweet(id))
    dispatch(findUserById(id)) 
    dispatch(findTweetsByUserLikes(id))
  }, [dispatch, id, auth.user.following])


  const handleUnFollowUser = () => {
    dispatch(unfollowUser(id))
  };
  
  const handleFollowUser = () => {
    dispatch(followUser(id))
  };

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfile = () => setOpenProfileModal(true);
  const handleClose = () => {setOpenProfileModal(false)};

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)

    if(newValue === 4) {
      console.log("Likes")
    }
    else if(newValue===1) {
      console.log("users tweets")
    }
  }
 

  return (
    <div>
      <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-90">
        <BackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">{auth.findUser?.fullName}</h1>
        <img className="w-4 h-4 ml-1 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
      </section>

      <section>
        <img
          className="w-[100%] h-[12rem] object-cover"
          src={auth.findUser?.backgroundImage
          }
          alt="bgimage"
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Name"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
            src={auth.findUser?.image || null}
          />
          {auth.findUser?.req_user ? (
            <Button
              onClick={handleOpenProfile}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <>
              {auth.findUser?.followed? <Button
              onClick={handleUnFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            > Unfollow
            </Button>:
              <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >Follow</Button>
              }
            </>
            
          )}
        </div>

        <div>
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-lg">{auth.findUser?.fullName}</h1>
              <img className="w-5 h-5 ml-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
            </div>
            <h1 className="text-gray-600">@{auth.findUser?.fullName.split(" ").join("_").toLowerCase()}
            </h1>
          </div>
          <div className="mt-2 space-y-3">
            <p className="overflow-hidden">{auth.findUser?.bio}</p>
            <div className="py-1 flex space-x-5">
              <div className="flex items-center text-gray-500">
                <BusinessCenterIcon />
                <p className="ml-2">Education</p>
              </div>
              <div className="flex items-center text-gray-500">
                <LocationIcon />
                <p className="ml-2">{auth.findUser?.location}</p>
              </div>
              <div className="flex items-center text-gray-500">
                <CalendarIcon />
                <p className="ml-2">Joined Jan 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
                <span>{auth.findUser?.followers.length}</span>
                <span className="text-gray-500">Followers</span>
              </div>
            <div className="flex items-center space-x-1 font-semibold">
                <span>{auth.findUser?.following.length}</span>
                <span className="text-gray-500">Following</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Retweets" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" >Tweets {tweet.tweets?.map((item)=>  <TweetCard item={item} />)}</TabPanel>
        <TabPanel value="2">Retweets {tweet.tweets?.map((item)=> {if(item.retweet) {return <TweetCard key={item.id} item={item} />} return null })}</TabPanel>
        <TabPanel value="3">Media {tweet.tweets?.map((item)=> {if(item?.image) {return  <img className="w-[28rem] border border-gray-400 p-2 my-4 " src={item?.image} alt="media" /> } return null })} </TabPanel>
        <TabPanel value="4">Likes {tweet.likedTweets?.map((item)=>  <TweetCard key={item.id} item={item} />)} </TabPanel>
      </TabContext>
    </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
}

