package com.project.stella_boutique.rest;

import com.project.stella_boutique.service.guest.rate.GetRateUseCase;
import com.project.stella_boutique.service.guest.rate.GetRateUseCaseOutput;
import com.project.stella_boutique.service.guest.product.GetProductUseCase;
import com.project.stella_boutique.service.guest.product.GetProductUseCaseOutput;
import com.project.stella_boutique.service.guest.discount.GetDiscountUseCase;
import com.project.stella_boutique.service.guest.discount.GetDiscountUseCaseOutput;

import com.project.stella_boutique.service.exception.guest.GetDiscountErrorException;
import com.project.stella_boutique.service.exception.guest.GetProductErrorException;
import com.project.stella_boutique.service.exception.guest.GetRateErrorException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/guest")
public class GuestRestAdapter {
    @Autowired
    GetRateUseCase getRateUseCase;

    @Autowired
    GetProductUseCase getProductUseCase;

    @Autowired
    GetDiscountUseCase getDiscountUseCase;

    @GetMapping(value= "/product")
    public ResponseEntity<GetProductUseCaseOutput> getAllProduct() {
        GetProductUseCaseOutput output = new GetProductUseCaseOutput();
        try {
            this.getProductUseCase.execute(output);
        } catch (GetProductErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
    // @PostMapping(value= "/discount")

    // @PostMapping(value= "/rate")
}