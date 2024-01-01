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

export default function TweetCard() {
  const navigate = useNavigate();

  const handleDeleteTweet = () => {
    console.log("delete tweet");
  };

  const handleOpenReplyModel = () => {
    console.log("Open model");
  };

  const handleCreateRetweet = () => {
    console.log("Handle Create Retweet");
  };

  const handleLikeTweet = () => {
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
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          className="cursor-pointer"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Name</span>
              <span className="text-gray-600">@username</span>
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
            <div className="cursor-pointer">
              <p className="mb-2 p-0">It is new years!</p>
              <img
                src="https://cdn.pixabay.com/photo/2014/12/21/07/49/fireworks-574739_1280.jpg"
                alt=""
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-5 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>5</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-5 flex items-center`}
              >
                {true ? (
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
                <p>5</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <ChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <UploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
