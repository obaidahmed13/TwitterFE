package com.obaidahmed.twitter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obaidahmed.twitter.model.Like;
import com.obaidahmed.twitter.repository.LikeRepository;

@Service
public class LikeService {
	@Autowired
	private LikeRepository likeRepository;
	
	public void doesLikeExist(Long userId, Long tweetId) {
		Like like = likeRepository.findByUserIdAndTweetId(userId, tweetId);
		if (like!= null) {
			System.out.println("Like exists");
		} else {
			System.out.println("No like found");
		}
		}

	
	public void getLikesByTweetId(Long tweetId) {
        List<Like> likes = likeRepository.findByTweetId(tweetId);
    }
	

	

}
