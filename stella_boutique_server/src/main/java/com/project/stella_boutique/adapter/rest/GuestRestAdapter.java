package com.project.stella_boutique.rest;

import com.project.stella_boutique.service.guest.rate.GetRateUseCase;
import com.project.stella_boutique.service.guest.rate.GetRateUseCaseInput;
import com.project.stella_boutique.service.guest.rate.GetRateUseCaseOutput;
import com.project.stella_boutique.service.guest.product.GetProductUseCase;
import com.project.stella_boutique.service.guest.product.GetProductUseCaseOutput;
import com.project.stella_boutique.service.guest.discount.GetDiscountUseCase;
import com.project.stella_boutique.service.guest.discount.GetDiscountUseCaseInput;
import com.project.stella_boutique.service.guest.discount.GetDiscountUseCaseOutput;


import com.project.stella_boutique.service.exception.GetDiscountErrorException;
import com.project.stella_boutique.service.exception.GetProductErrorException;
import com.project.stella_boutique.service.exception.GetRateErrorException;


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
    @GetMapping(value= "/discount")
    public ResponseEntity<GetDiscountUseCaseOutput> getAllDiscount(@RequestBody GetDiscountUseCaseInput requestBody) {
        GetDiscountUseCaseInput input = new GetDiscountUseCaseInput();
        GetDiscountUseCaseOutput output = new GetDiscountUseCaseOutput();
        //------
        try {
            this.getDiscountUseCase.execute(input, output);
        } catch (GetDiscountErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }

    @GetMapping(value= "/rate")
    public ResponseEntity<GetRateUseCaseOutput> getAllRate(@RequestBody GetRateUseCaseInput requestBody){
        GetRateUseCaseInput input = new GetRateUseCaseInput();
        GetRateUseCaseOutput output = new GetRateUseCaseOutput();
        try {
            this.getRateUseCase.execute(input, output);
        } catch (GetRateErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
}