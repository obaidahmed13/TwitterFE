package com.obaidahmed.twitter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obaidahmed.twitter.exception.UserException;
import com.obaidahmed.twitter.model.Like;
import com.obaidahmed.twitter.model.Tweet;
import com.obaidahmed.twitter.model.User;
import com.obaidahmed.twitter.repository.LikeRepository;
import com.obaidahmed.twitter.repository.TweetRepository;

@Service
public class LikeService {
	@Autowired
	private LikeRepository likeRepository;
	@Autowired
	private TweetService tweetService;
	@Autowired
	private TweetRepository tweetRepository;
	
	
	public Like likeTweet(Long tweetId, User user) throws UserException {
		Like doesLikeExist= doesLikeExist(user.getId(), tweetId);
		if(doesLikeExist!=null) {
			likeRepository.deleteById(doesLikeExist.getId());
			return doesLikeExist;
		}
		Tweet tweet = tweetService.findById(tweetId);
		Like like = new Like();
		like.setTweet(tweet);
		like.setUser(user);
		
		Like savedLike = likeRepository.save(like);
		
		tweet.getLikes().add(savedLike);
		tweetRepository.save(tweet);
		
		return savedLike;
	}
	
	public List<Like> getAllLikes(Long tweetId) {
		Tweet tweet = tweetService.findById(tweetId);
		List <Like> likes= likeRepository.findByTweetId(tweetId);
		
		return likes;
		
	}
	
	
	public Like doesLikeExist(Long userId, Long tweetId) {
		Like like = likeRepository.findByUserIdAndTweetId(userId, tweetId);
		return like;
	}

	
	public void getLikesByTweetId(Long tweetId) {
        List<Like> likes = likeRepository.findByTweetId(tweetId);
    }
	

	

}
