import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, searchUser } from '../../Store/Auth/Action'
import { Link } from 'react-router-dom'


export default function RightBar() {
    const { auth } = useSelector((store) => store);

    const dispatch = useDispatch();
    console.log(auth, "YOooooooooiojohohohoohohhohohohohohoho")

    const handleSearch = (query) => {
        if (query.trim() === '') {
            dispatch(clearSearch());
          } else {
            dispatch(searchUser(query));
          }
    }
    
  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center'>
            <input 
            onChange= {(e)=> handleSearch(e.target.value)}
            type="text" placeholder="Search Twitter..." className='py-3 rounded-full text-gray-500 w-full pl-12 border-2' />
            <div className='absolute top-1 left-2 pt-2 pl-2 '>
              <SearchIcon className='text-gray-500 ' 
                
                >
                </SearchIcon>

            </div>
            
        </div>
        <div className=' mt-1'>
            <ul >
            {auth.searchedUser?.map((user) => (
            <li key={user.id}>
               <div className='border-2 p-2 flex justify-between hover:shadow-lg text-sm '>
                <Link className='' to={`/profile/${user.id}`}>
                {user.fullName} | {user.email}
                </Link>
                <img className="w-4 h-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" /> 
          </div>
          </li>
            ))}
            </ul> 
            </div> 
        <section className='my-5 '>
            <h1 className='text-xl font-bold'>You are Verified!</h1>
            <h1 className='font-bold my-2'>You unlocked your blue checkmark. </h1>
            <Button variant='contained' disabled sx={{padding: "10px", paddingX: "20px", borderRadius: "25px"}}>
                Verified
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
                    <p>123.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment - Trending</p>
                    <p className='font-bold'>#JJK</p>
                    <p>45.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment - Trending</p>
                    <p className='font-bold'>#Valorant</p>
                    <p>43.2k Tweets</p>
                </div>
                
                
                <MoreIcon/>
            </div>
        </section>
    </div>
  )
}
