import { useNavigate  } from "react-router-dom"
import { NavigationMenu } from './NavigationMenu'
import { Avatar, Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";

export default function Navigation(){
    const {auth}=useSelector(store=>store)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout =() => {
        dispatch(logout())
    }
  return (
    <div className="h-screen sticky top-0">
        <div>
            <div className="py-5 mb-2">
                <svg height="35" width="35" viewBox="0 0 24 24" aria-hidden="true" >
                    <g>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>
            </div>
            <div className="space-y-5">
                {NavigationMenu.map((item)=> 
                <div key={item.title} className='flex space-x-3 items-center cursor-pointer'
                onClick={()=> item.title==="Profile"?navigate(`/profile/${auth.user.id}`):navigate(item.path)}>
                    {item.icon}
                <p className='text-xl'>{item.title}</p>
                </div>
                )}
            </div>
            <div className="py-6">
                <Button 
                sx={{width:"100%", borderRadius:"29px", py:"15px", bgcolor: '#1e88e5'}} 
                variant="contained" type='submit'>
                    Tweet
                </Button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Avatar alt="user pic"
                    src={auth.user.image}/>
                    <div>
                        <div className="flex">
                            <span className="ml-1" >{auth.user?.fullName}</span><br/>
                            <img className="w-4 h-4 ml-1 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
                        </div>
                        <span className="opacity-60">@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                    </div>
                    <Button ><LogoutIcon onClick={handleLogout}/></Button>

                </div>

            </div>
        </div>
    </div>

  )
}
