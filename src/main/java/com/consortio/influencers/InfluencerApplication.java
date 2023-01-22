package com.consortio.influencers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class InfluencerApplication {
	public static void main(String[] args) {
		SpringApplication.run(InfluencerApplication.class, args);
	}
}
