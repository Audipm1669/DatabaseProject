package com.project.stella_boutique;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.project.stella_boutique.service.GuestService;


@SpringBootApplication
public class StellaBoutiqueApplication {

	public static void main(String[] args) {
		// GuestService guestService = new GuestService();
		SpringApplication.run(StellaBoutiqueApplication.class, args);
		// guestService.GetProduct();
	}

}
