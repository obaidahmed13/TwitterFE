import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import RightBar from '../RightBar/RightBar'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TweetDetails from '../TweetDetails/TweetDetails'



export default function Home() {
  return (
    <Grid container item xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6} className='px-3 lg:px-5 hidden lg:block w-full relative'>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/home" element={<Main/>}></Route>
            <Route path='/profile/:id' element={<Profile/>}></Route>
            <Route path='/tweet/:id' element={<TweetDetails/>}></Route>
          </Routes>
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
          <RightBar/>
        </Grid>
        
    </Grid>
  )
}