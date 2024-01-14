import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Notification() {
    const {auth} = useSelector(store=> store)

    useEffect(() => {
      }, [auth.followedUsers]);
    
  return (
    <div className='flex'>
        <div className='w-1/2'>
        <h1 className='font-bold text-lg mt-5'>Followers</h1>
        <ul>
            {auth.user.followers?.map((follower, index)=> (
                <li className='p-4 border border-black flex flex-col my-5 shadow-md hover:bg-slate-100 rounded-lg' key={index}>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <Link className='font-semibold hover:underline'  to={`/profile/${follower.id}`}>{follower?.fullName}</Link>
                            <img className="w-4 h-4 ml-1 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
                        </div>
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
                <li className=' p-4 border border-black flex flex-col my-5 shadow-md hover:bg-slate-100 rounded-lg' key={index}>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <Link className='font-semibold hover:underline' to={`/profile/${followed.id}`}>{followed?.fullName}</Link>
                            <img className="w-4 h-4 ml-1 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
                        </div>
                        <span className="opacity-60">@{followed?.fullName.split(" ").join("_").toLowerCase()}</span>
                    </div>
                    
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
