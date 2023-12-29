package com.obaidahmed.twitter.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;



@Entity
@Table(name="tweets")
public class Tweet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@PrePersist
	protected void onCreate(){
	this.createdAt = new Date();
	this.updatedAt = new Date();
	}
	@PreUpdate
	protected void onUpdate(){
	this.updatedAt = new Date();
	}
	
	@ManyToOne
	private User user;
	
	private String content;
	private String image;
	private String video;
	
	@OneToMany(mappedBy="tweet", cascade = CascadeType.ALL)
	private List<Like> likes = new ArrayList<>();
	
	@OneToMany
	private List<Tweet> replyTweets = new ArrayList<>();
	
	@ManyToMany
	private List<User> retweetUser = new ArrayList<>();
	
	@ManyToOne
	private Tweet replyFor;
	
	private boolean isReply;
	private boolean isTweet;
	
	
	public Tweet() {
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
	public List<Like> getLikes() {
		return likes;
	}
	public void setLikes(List<Like> likes) {
		this.likes = likes;
	}
	public List<Tweet> getReplyTweets() {
		return replyTweets;
	}
	public void setReplyTweets(List<Tweet> replyTweets) {
		this.replyTweets = replyTweets;
	}
	
	public List<User> getRetweetUser() {
		return retweetUser;
	}
	public void setRetweetUser(List<User> retweetUser) {
		this.retweetUser = retweetUser;
	}
	public Tweet getReplyFor() {
		return replyFor;
	}
	public void setReplyFor(Tweet replyFor) {
		this.replyFor = replyFor;
	}
	public boolean isReply() {
		return isReply;
	}
	public void setReply(boolean isReply) {
		this.isReply = isReply;
	}
	public boolean isTweet() {
		return isTweet;
	}
	public void setTweet(boolean isTweet) {
		this.isTweet = isTweet;
	}
	
	
	
}
