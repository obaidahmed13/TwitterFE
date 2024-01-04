import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTweetReply } from '../../Store/Tweet/Action';




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
  borderRadius: 4,
};

export default function ReplyModal({open, handleClose, item}) {
  const [imageUpload, setImageUpload] = useState(false);
  const [selectImage, setSelectImage] = useState(false);
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(createTweetReply(values))
    handleClose()
    actions.resetForm();
    setSelectImage("")
    navigate(`/tweet/${item.id}`)
    console.log("handlesubmit", values)
  }
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        content: "",
        image: "",
        tweetId:item.id
    },
    onSubmit: handleSubmit
  });

  const handleSelectImage = (e)=> {
    setImageUpload(true);
    const imgUrl = e.target.files[0]
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl)
    setImageUpload(false);}

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          className="cursor-pointer"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">{item.user.fullName}</span>
              <span className="text-gray-600">@{item.user.fullName.split(" ").join("_").toLowerCase()}</span>
            </div>
            
          </div>
          <div className="mt-2">
            <div onClick={()=> navigate(`/tweet/${item.id}`)} className="cursor-pointer">
              <p className="mb-2 p-0">{item.content} </p>
              {item.image? <img src={item.image} alt="contentimg" />: null}
            </div>
            
          </div>
        </div>
      </div>
      <section className={`py-10`}>
            <div className='flex space-x-5'>
                <Avatar 
                alt='username' 
                />
                <div className='w-full'> 
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" name='content' placeholder='What is happening...' 
                            className={`border-none outline-none text-xl bg-transparent`} 
                            {...formik.getFieldProps("content")} 
                            />
                            {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                            )}
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex space-x-5 items-center'>
                                <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                <ImageIcon className=""/>
                                <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage} />
                                </label>
                                <FmdGoodIcon  />
                                <TagFacesIcon />
                            </div>
                            <div>
                                <Button sx={{
                                    width: "100%",
                                    borderRadius: "30px",
                                    paddingY: "8px",
                                    paddingX: "20px",
                                    
                                }}
                                variant="contained"
                                type='submit'>Tweet

                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
          
        </Box>
      </Modal>
    </div>
  );
}