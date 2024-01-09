import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import RightBar from '../RightBar/RightBar'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TweetDetails from '../TweetDetails/TweetDetails'
import ComingSoon from '../ComingSoon/ComingSoon'
import Explore from '../Explore/Explore'
import Notification from '../Notification/Notification'



export default function Home() {
  return (
    <Grid container item xs={12} spacing={4}  className='px-5 lg:px-28 flex justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6}  className='px-3 lg:px-3 hidden lg:block w-full relative'>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/home" element={<Main/>}></Route>
            <Route path='/profile/:id' element={<Profile/>}></Route>
            <Route path='/tweet/:id' element={<TweetDetails/>}></Route>
            <Route path='/explore' element={<Explore item="EXPLORE"/>}></Route>
            <Route path='/notification' element={<Notification item="NOTIFICATION"/>}></Route>
            <Route path='/messages' element={<ComingSoon item="MESSAGES"/>}></Route>
            <Route path='/lists' element={<ComingSoon item="LISTS"/>}></Route>
            <Route path='/communities' element={<ComingSoon item="COMMUNITIES"/>}></Route>
            <Route path='/more' element={<ComingSoon item="MORE"/>}></Route>
          </Routes>
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
          <RightBar/>
        </Grid>
    </Grid>
  )
}