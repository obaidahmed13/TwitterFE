import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../Store/Auth/Action';
import { uploadToCloudinary } from '../../Utils/uploadToCloud';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius:3
};

export default function ProfileModal({open, handleClose}) {
  const [uploading, setUploading] = useState(false)
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage]= useState("")
  const {auth} = useSelector((store)=>store)

  const handleSubmit=(values)=> {
    dispatch(updateUserProfile(values))
    handleClose()
    setSelectedImage("")
  }

  const handleImageChange = async(e) => {
    setUploading(true);

    const{name}= e.target
    const file = await uploadToCloudinary(e.target.files[0])
    formik.setFieldValue(name, file);
    setSelectedImage(file)
    setUploading(false);
    
  }
  console.log("auth", auth)

  const formik=useFormik({
    initialValues: {
        fullName: auth.findUser?.fullName || '',
        website: auth.findUser?.website || '',
        location: auth.findUser?.location || '',
        bio: auth.findUser?.bio || '',
        backgroundImage: auth.findUser?.backgroundImage || "",
        image: auth.findUser?.image || "",
    },
    onSubmit: handleSubmit
  })

  React.useEffect(() => {
    formik.setValues({
      fullName: auth.findUser?.fullName || '',
      website: auth.findUser?.website || '',
      location: auth.findUser?.location || '',
      bio: auth.findUser?.bio || '',
      backgroundImage: auth.findUser?.backgroundImage || '',
      image: auth.findUser?.image || '',
    });
  }, [auth.findUser]);
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} area-label="delete">
                            <CloseIcon/>
                        </IconButton>
                        <p className='text-sm'>Edit Profile</p>
                    </div>
                    <Button type='submit'>Save</Button>
                </div>
                <div className='no-scrollbar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                    <div>
                        <div className='w-full'>
                            <div className='relative'>
                                <img 
                                className='w-full h-[12rem] object-cover object-center'
                                src={auth.user?.backgroundImage || null} 
                                alt="bgimage" 
                                />

                                <input 
                                type='file' 
                                name= 'backgroundImage'
                                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' 
                                onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                            <div className='relative '>
                                <Avatar 
                                sx={{width:"10rem", height:"10rem", border:"4px solid white"}}
                                src={auth.user?.image || null}
                                />
                                <input type="file" 
                                className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                onChange={handleImageChange}
                                name='image'
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <TextField
                        fullWidth
                        id='fullName'
                        name='fullName'
                        label='Full Name'
                        
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                        <TextField
                        fullWidth
                        multiline
                        rows={4}
                        id='bio'
                        name='bio'
                        label='Bio'
                        value={formik.values.bio}
                        onChange={formik.handleChange}
                        error={formik.touched.bio && Boolean(formik.errors.bio)}
                        helperText={formik.touched.bio && formik.errors.bio}
                        />
                        <TextField
                        fullWidth
                        id='website'
                        name='website'
                        label='Website'
                        value={formik.values.website}
                        onChange={formik.handleChange}
                        error={formik.touched.website && Boolean(formik.errors.website)}
                        helperText={formik.touched.website && formik.errors.website}
                        />
                        <TextField
                        fullWidth
                        id='location'
                        name='location'
                        label='Location'
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}
                        />
                        <div className='my-3'>
                            <p className='text-lg'>Birth Date . Edit</p>
                            <p className='text-md font-semibold'>{auth.findUser?.birthDate}</p>
                        </div>
                        <p className='py-3 text-lg'>Edit Profile</p>
                    </div>

                </div>
            </form>
          
        </Box>
      </Modal>
    </div>
  );
}