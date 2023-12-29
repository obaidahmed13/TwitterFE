package com.obaidahmed.twitter.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obaidahmed.twitter.exception.UserException;
import com.obaidahmed.twitter.model.Tweet;
import com.obaidahmed.twitter.model.User;
import com.obaidahmed.twitter.repository.TweetRepository;
import com.obaidahmed.twitter.request.TweetReplyRequest;

@Service
public class TweetService {
	
	@Autowired
	private TweetRepository tweetRepository;
	
	public Tweet createTweet(Tweet req, User user) throws UserException {
		Tweet tweet = new Tweet();
		tweet.setContent(req.getContent());
		tweet.setImage(req.getImage());
		tweet.setUser(user);
		tweet.setReply(false);
		tweet.setTweet(true);
		tweet.setVideo(req.getVideo());
		
		
		return tweetRepository.save(tweet);
	}
	
	public List<Tweet> findAllTweets() {
		
		return tweetRepository.findByIsTweetTrueOrderByCreatedAtDesc();
	}
	
	public Tweet retweet(Long tweetId, User user) throws UserException {
		Tweet tweet = findById(tweetId);
		if (tweet.getRetweetUser().contains(user)) {
			tweet.getRetweetUser().remove(user);
		} else {
			tweet.getRetweetUser().add(user);
		}
		return tweetRepository.save(tweet);
	}
	
	public Tweet findById(Long tweetId) {
		Optional<Tweet> optionalTweet = tweetRepository.findById(tweetId);
        return optionalTweet.orElse(null);
	}
	
	public void deleteTweetById(Long tweetId, Long userId) throws UserException {
		Tweet tweet = findById(tweetId);
		
		if(!userId.equals(tweet.getUser().getId())) {
			throw new UserException("You can't delete another user's tweet");
		}
		tweetRepository.deleteById(tweet.getId());
	}
	
	public Tweet createReply(TweetReplyRequest req, User user) {
		Tweet replyFor=findById(req.getTweetId()); 
		Tweet tweet = new Tweet();
		tweet.setContent(req.getContent());
		tweet.setImage(req.getImage());
		tweet.setUser(user);
		tweet.setReply(true);
		tweet.setTweet(false);
		tweet.setReplyFor(replyFor);
		
		Tweet savedReply = tweetRepository.save(tweet);
		tweet.getReplyTweets().add(savedReply);
		tweetRepository.save(replyFor);
		return replyFor;
	}
	
	public List<Tweet> getUserTweet(User user) {
		return tweetRepository.findByRetweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(user, user.getId());
		
	}
	
	public List<Tweet> findByLikesContainsUser(User user) {
		return tweetRepository.findByLikesUser_id(user.getId());
	}
	
}
	
	
	
