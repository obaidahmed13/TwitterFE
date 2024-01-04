import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/FileUpload";
import ChartIcon from "@mui/icons-material/BarChart";
import FavFilledIcon from "@mui/icons-material/Favorite";
import ReplyModal from "./ReplyModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRetweet, likeTweet } from "../../Store/Tweet/Action";

export default function TweetCard({item}) {
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTweet = () => {
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
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>Retweets</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${item?.user.id}`)}
          alt="username"
          className="cursor-pointer"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">{item?.user?.fullName}</span>
              <span className="text-gray-600">{item?.user?.fullName.split(" ").join("_").toLowerCase()}</span>
            </div>
            <div>
              <Button
                onClick={handleDeleteTweet}
                className="cursor-pointer font-small"
              >
                <RemoveIcon />
              </Button>
              <Button
                onClick={handleDeleteTweet}
                className="cursor-pointer font-small"
              >
                <EditIcon />
              </Button>
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=> navigate(`/tweet/${item?.id}`)} className="cursor-pointer">
              <p className="mb-2 p-0">{item?.content}</p>
              {item.image?<img
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
                <p>430</p>
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
