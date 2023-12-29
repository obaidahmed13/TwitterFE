package com.obaidahmed.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.obaidahmed.twitter.model.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
	
	Like findByUserIdAndTweetId(Long userId, Long tweetId);	
	
	List<Like> findByTweetId(Long tweetId);
	
	
	
	
}
