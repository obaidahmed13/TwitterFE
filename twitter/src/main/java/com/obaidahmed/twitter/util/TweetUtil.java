package com.obaidahmed.twitter.util;

import com.obaidahmed.twitter.model.Like;
import com.obaidahmed.twitter.model.Tweet;
import com.obaidahmed.twitter.model.User;

public class TweetUtil {
	public final static boolean isLikedByReqUser(User reqUser, Tweet tweet) {
		for(Like like: tweet.getLikes()) {
			if (like.getUser().getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}
	
	public final static boolean isRetweetedByReqUser(User reqUser, Tweet tweet) {
		for(User user: tweet.getRetweetUser()) {
			if(user.getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}

}
