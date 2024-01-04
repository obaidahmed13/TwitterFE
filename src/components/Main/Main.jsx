import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';
import { useDispatch, useSelector } from 'react-redux';
import { createTweet, getAllTweets } from '../../Store/Tweet/Action';
import { uploadToCloudinary } from '../../Utils/uploadToCloud';



export default function Main() {
    const [imageUpload, setImageUpload] = useState(false);
    const [selectImage, setSelectImage] = useState(false);
    const dispatch = useDispatch();
    const{tweet}= useSelector(store=>store)
    console.log("tweet", tweet)
    const validationSchema = Yup.object().shape({
        content:Yup.string().required("Text is required"),
    })
    const handleSubmit=async(values, actions)=> {
        try {
            await dispatch(createTweet(values));
            actions.resetForm();
            setSelectImage("")
            console.log("values", values);
        } catch (error) {
            console.error("Error creating tweet", error);
        }
    }
    const formik=useFormik({
        initialValues: {
            content:"",
            image:"",
            isTweet:true
        },
        onSubmit:handleSubmit,
        validationSchema,
    });

    const handleSelectImage = async(e)=> {
        setImageUpload(true);
        const imgURL = await uploadToCloudinary(e.target.files[0])
        formik.setFieldValue("image", imgURL);
        setSelectImage(imgURL)
        setImageUpload(false);
    }


    useEffect(()=>{
        dispatch(getAllTweets())
    }, [tweet.like, tweet.retweet])

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
        </section>
        <section className={`pb-10`}>
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
                                <ImageIcon />
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
                    <div>
                       {selectImage && <img src={selectImage} alt='' className='mt-3' />}
                    </div>
                </div>
            </div>
        </section>
        <section>
            {tweet.tweets.map((item)=> <TweetCard item={item}/>)}
        </section>
    </div>

  )}
