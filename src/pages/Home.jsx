import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Main from '../components/Main/Main.jsx'
import RightBar from '../components/RightBar/RightBar'

export default function Home() {
  return (
    <Grid container item xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6} className='px-3 lg:px-5 hidden lg:block w-full relative'>
            <Main/>
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
          <RightBar/>
        </Grid>

    </Grid>
  )
}
