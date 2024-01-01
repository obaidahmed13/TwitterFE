import React, { useState } from "react";
import BackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarMonth'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TweetCard from "../Main/TweetCard";


export default function Profile() {
  const [tabValue, setTabValue] = useState("1")
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfile = () => {
    console.log("Open profile model");
  };

  const handleFollowUser = () => {
    console.log("follow User");
  };

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
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Name</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
          alt="bgimage"
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Name"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfile}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true? "Follow":"Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-lg">Name</h1>
            </div>
            <h1 className="text-gray-600">@username
            </h1>
          </div>
          <div className="mt-2 space-y-3">
            <p>Hey I am creating this twitter app with react and springboot!</p>
            <div className="py-1 flex space-x-5">
              <div className="flex items-center text-gray-500">
                <BusinessCenterIcon />
                <p className="ml-2">Education</p>
              </div>
              <div className="flex items-center text-gray-500">
                <LocationIcon />
                <p className="ml-2">Florida</p>
              </div>
              <div className="flex items-center text-gray-500">
                <CalendarIcon />
                <p className="ml-2">Joined Jan 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
                <span>450</span>
                <span className="text-gray-500">Followers</span>
              </div>
            <div className="flex items-center space-x-1 font-semibold">
                <span>60</span>
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
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Tweets
        {[1,1,1,1,1].map((item)=><TweetCard/>)}</TabPanel>
        <TabPanel value="2">Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>
    </div>
  );
}
