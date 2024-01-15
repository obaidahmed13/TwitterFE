import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../Store/Auth/Action'
import { Button } from '@mui/material'

export default function Unfollow({id}) {
    const {auth } = useSelector((store)=>store)
    const dispatch = useDispatch()

    const handleUnFollowUser = (id) => {
        dispatch(unfollowUser(id))
      };
  return (
    <div>
            <Button
              onClick={handleUnFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            > Unfollow
            </Button>
    </div>
  )
}
