package com.project.stella_boutique;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.project.stella_boutique.service.SellerService;

import java.util.ArrayList;
import java.util.List;
import java.io.*;

import com.project.stella_boutique.model.discount.Discount;
import com.project.stella_boutique.model.item.*;
import com.project.stella_boutique.model.order.Order;
import com.project.stella_boutique.model.user.User;

@SpringBootApplication
public class StellaBoutiqueApplication {
	public static void main(String[] args) {
		SpringApplication.run(StellaBoutiqueApplication.class, args);
		SellerService sellerService = new SellerService();
		List<Discount> productList = sellerService.GetDiscount("2020/12/23");
		for(Discount product:productList){
			System.out.println(product.getDiscountName());
		}
	}

}
