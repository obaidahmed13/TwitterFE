package com.obaidahmed.twitter.dto;

import java.time.LocalDateTime;
import java.util.List;

public class TweetDto {
	
	private Long id;
	
	private String content;
	
	private String image;
	
	private String video;
	
	private UserDto user;
	
	private LocalDateTime createdAt;
	
	private int totalLikes;
	
	private int totalRetweets;
	
	private boolean isLiked;
	
	private boolean isRetweet;
	
	private List<Long>retweetUsersId;
	
	private List<TweetDto>replyTweets;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public int getTotalLikes() {
		return totalLikes;
	}

	public void setTotalLikes(int totalLikes) {
		this.totalLikes = totalLikes;
	}

	public int getTotalRetweets() {
		return totalRetweets;
	}

	public void setTotalRetweets(int totalRetweets) {
		this.totalRetweets = totalRetweets;
	}

	public boolean isLiked() {
		return isLiked;
	}

	public void setLiked(boolean isLiked) {
		this.isLiked = isLiked;
	}

	public boolean isRetweet() {
		return isRetweet;
	}

	public void setRetweet(boolean isRetweet) {
		this.isRetweet = isRetweet;
	}

	public List<Long> getRetweetUsersId() {
		return retweetUsersId;
	}

	public void setRetweetUsersId(List<Long> retweetUsersId) {
		this.retweetUsersId = retweetUsersId;
	}

	public List<TweetDto> getReplyTweets() {
		return replyTweets;
	}

	public void setReplyTweets(List<TweetDto> replyTweets) {
		this.replyTweets = replyTweets;
	}
	
	

}
