import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
            <p className='text-center'>Middle</p>
        </Grid>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <p className='text-center'>Right</p>
        </Grid>

    </Grid>
  )
}
