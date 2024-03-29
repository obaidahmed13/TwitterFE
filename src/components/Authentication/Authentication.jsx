import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import { blue } from "@mui/material/colors";
import OAuth from "./OAuth";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');  // Set the default path
  const navigate = useNavigate()

  const handleOpenAuthModal = (path) => {
    setCurrentPath(path);
    setOpenAuthModal(true);
  };

  const handleCloseAuthModal = () => setOpenAuthModal(false);

  useEffect(() => {
    if (openAuthModal) {
      // Navigate to the desired path when the modal is closed
      // You can access the currentPath state here
      navigate(currentPath);  
    }
  }, [openAuthModal, currentPath]);


  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <div className="absolute top-[26%] left-[19%]">
            <svg height="300" width="300" viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-1b3axf">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
        </Grid>
        <Grid className='px-10' lg={5} xs={12} >
          <h1 className='font-bold text-6xl mt-10'>Happening Now</h1>
          <h1 className='font-bold text-3xl pt-16 pb-10' >Join Today.</h1>
          <div className='w-[60%]'>
            <div className='w-full'>
             
             <OAuth />
             <div className="flex ">
              <p className='py-5 text-center '><span className="opacity-10">----------------- </span> OR <span className="opacity-10"> -----------------</span></p>
            </div>
              <Button onClick={() => handleOpenAuthModal('/signup')} fullWidth variant="contained" size="large" sx={
                {
                borderRadius: "29px",
                py:"7px",
                bgcolor: blue[500],
              }
              }>Create Account</Button>
              <p className='text-xs mt-2'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. </p>
            </div> 
            <div>
              <h1 className='font-bold text-xl mb-5 mt-8'>Already have an account?</h1>
            <Button onClick={() => handleOpenAuthModal('/signin')} fullWidth variant="outlined" size="large" sx={
                {
                borderRadius: "29px",
                py:"7px",
              }
              }>Sign in</Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal}/ >
    </div>
  );
}
