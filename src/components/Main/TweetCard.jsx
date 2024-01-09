import React, { useEffect } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/FileUpload";
import ChartIcon from "@mui/icons-material/BarChart";
import FavFilledIcon from "@mui/icons-material/Favorite";
import ReplyModal from "./ReplyModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRetweet, deleteTweet, likeTweet } from "../../Store/Tweet/Action";

export default function TweetCard({item, userId}) {
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store)
  console.log("auth user",auth)
  console.log( "items ", item)
  
let counter = 0;
function randomViews() {
  const randomNumber = Math.floor(Math.random() * 1000);
  counter += randomNumber;
  return counter;
}
  const views = randomViews()


  const handleDeleteTweet = () => {
    dispatch(deleteTweet(item?.id))
    console.log("delete tweet");
  };


  const handleCreateRetweet = () => {
    dispatch(createRetweet(item?.id))
    console.log("Handle Create Retweet");
  };

  const handleLikeTweet = () => {
    dispatch(likeTweet(item?.id))
    console.log("Handle Like Retweet");
  };
  
  return (
    <div>
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${item?.user.id}`)}
          alt="username"
          className="cursor-pointer"
          src={item.user?.image}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">{item?.user?.fullName}</span>
              <img className="w-5 h-5 ml-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="verified" />
              <span className="text-gray-600">@{item?.user?.fullName.split(" ").join("_").toLowerCase()}</span>
            </div>
            <div>
              {auth.user?.id === item.user.id ? <Button
                onClick={handleDeleteTweet}
                className="cursor-pointer font-small"
              >
                <RemoveIcon />
              </Button> : null}
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=> navigate(`/tweet/${item?.id}`)} className="cursor-pointer">
              <p className="mb-2 p-0">{item?.content}</p>
              {item?.image?<img
                src={item?.image}
                alt=""
                className="w-[28rem] border border-gray-400 p-2 rounded-md"
              />:null}
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>{item?.totalReplies}</p>
              </div>
              <div
                className={`${
                  item?.retweet ? "text-pink-600" : "text-gray-600"
                } space-x-5 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>{item?.totalRetweets}</p>
              </div>

              <div
                className={`${
                  item?.liked ? "text-pink-600" : "text-gray-600"
                } space-x-5 flex items-center`}
              >
                {item?.liked ? (
                  <FavFilledIcon
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteIcon
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                )}
                <p>{item?.totalLikes}</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <ChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>{views}</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <UploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </div>
  );
}
