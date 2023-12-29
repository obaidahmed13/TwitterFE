package com.obaidahmed.twitter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.obaidahmed.twitter.service.TweetService;
import com.obaidahmed.twitter.service.UserService;

@RestController
@RequestMapping("/api/tweets")
public class TweetController {
	
	@Autowired
	private TweetService tweetService;
	
	@Autowired
	private UserService userService;
	
	// Data transfer object
	public ResponseEntity<TweetDto>

}
