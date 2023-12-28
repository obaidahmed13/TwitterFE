package com.obaidahmed.twitter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/welcome")
public class HomeController {
	
	@GetMapping("/home")
	public String getHome() {
		return "Welcome to rest api"
;	}

}
