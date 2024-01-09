import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Notification() {
    const {auth} = useSelector(store=> store)
    
  return (

    <div className='flex'>
        <div className='w-1/2'>
        <h1 className='font-bold text-lg mt-5'>Followers</h1>
        <ul>
            {auth.user.followers?.map((follower, index)=> (
                <li className='p-5 border border-black flex flex-col my-5 shadow-md hover:bg-slate-100 rounded-lg' key={index}>
                    <div className='flex flex-col'>
                        
                        <Link className='font-semibold hover:underline'  to={`/profile/${follower.id}`}>{follower?.fullName}</Link>
                        <span className="opacity-60">@{follower?.fullName.split(" ").join("_").toLowerCase()}</span>
                    </div>
                    
                </li>
            ))}
        </ul>
        </div>
        <div className='ml-5 w-1/2'>
        <ul>
            <h1 className='font-bold text-lg mt-5'>Following</h1>
            {auth.user.following?.map((followed, index)=> (
                <li className=' p-5 border border-black flex flex-col my-5 shadow-md hover:bg-slate-100 rounded-lg' key={index}>
                    <div className='flex flex-col'>
                        <Link className='font-semibold hover:underline' to={`/profile/${followed.id}`}>{followed?.fullName}</Link>
                        <span className="opacity-60">@{followed?.fullName.split(" ").join("_").toLowerCase()}</span>
                    </div>
                    
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
