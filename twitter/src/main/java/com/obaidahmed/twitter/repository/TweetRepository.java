package com.obaidahmed.twitter.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.obaidahmed.twitter.model.Tweet;
import com.obaidahmed.twitter.model.User;

@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long> {
	
	List<Tweet> findByIsTweetTrueOrderByCreatedAtDesc();
	
	List<Tweet> findByRetweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(User user, Long userId);
	
	List<Tweet> findByLikesContainingOrderByCreatedAtDesc(User user);
	
	List<Tweet> findByLikesUser_id(Long userId);
	

}
