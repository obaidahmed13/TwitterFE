import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Button } from '@mui/material'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../Store/Auth/Action'
import { Link } from 'react-router-dom'


export default function RightBar() {
    const handleChangeTheme=() => {
        console.log("Handle change theme")
    }
    const { auth } = useSelector((store) => store);


    const dispatch = useDispatch();

    const handleSearch = (query) => {
        dispatch(searchUser(query))
    }
    
  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center'>
            <input 
            onChange= {(e)=> handleSearch(e.target.value)}
            type="text" className='py-3 rounded-full text-gray-500 w-full pl-12 border-2' />
            <div className='absolute top-0 left-0 pt-2 pl-2 '>
               <Button><SearchIcon className='text-gray-500' 
                onClick={handleSearch}
                >
                </SearchIcon></Button> 

            </div>
            <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
        </div>
           {auth.searchedUser? <div className=' mt-1'>
            <ul >
            {auth.searchedUser?.map((user) => (
            <li key={user.id}><Link className='border-2 p-2 flex justify-between hover:shadow-lg text-sm' to={`/profile/${user.id}`}>
            {user.fullName} | {user.email}
          </Link> </li>
            ))}
            </ul>
            </div> : null }
        <section className='my-5 '>
            <h1 className='text-xl font-bold'>Get Verified!</h1>
            <h1 className='font-bold my-2'>Get verified to unlock new features! </h1>
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
            
            <div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment - Trending</p>
                    <p className='font-bold'>#SuperBowl</p>
                    <p>42.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment - Trending</p>
                    <p className='font-bold'>#JJK</p>
                    <p>42.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment - Trending</p>
                    <p className='font-bold'>#Valorant</p>
                    <p>42.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
        </section>
    </div>
  )
}
