import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Button } from '@mui/material'
import MoreIcon from '@mui/icons-material/MoreHoriz'

export default function RightBar() {
    const handleChangeTheme=() => {
        console.log("Handle change theme")
    }
  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center'>
            <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />

            <div className='absolute top-0 left-0 pl-3 pt-3'>
                <SearchIcon className='text-gray-500' />

            </div>
            <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />

        </div>
        <section className='my-5 '>
            <h1 className='text-xl font-bold'>Get Verified</h1>
            <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
            <Button variant='contained' sx={{padding: "10px", paddingX: "20px", borderRadius: "25px"}}>
                Get Verified
            </Button>
        </section>
        <section className='mt-7 space-y-5'>
            <h1 className='font-bold text-xl py-1'>What's happening</h1>
            <div>
                <p className='text-sm'>NBA Finals - LIVE</p>
                <p className='font-bold'>Clippers vs Bucks</p>
            </div>
            {[1,1,1].map((item)=>
            <div className='flex justify-between w-full'>
            <div>
                <p>Entertainment - Trending</p>
                <p className='font-bold'>#TheMarvels</p>
                <p>42.2k Tweets</p>
                
            </div>
            <MoreIcon/>
        </div>
            )}
            
            
        </section>
    </div>
  )
}
