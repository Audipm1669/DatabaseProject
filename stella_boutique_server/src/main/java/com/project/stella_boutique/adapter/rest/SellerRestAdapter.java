package com.project.stella_boutique.rest;

import com.project.stella_boutique.service.seller.discount.add.AddDiscountUseCase;
import com.project.stella_boutique.service.seller.discount.add.AddDiscountUseCaseInput;
import com.project.stella_boutique.service.seller.discount.add.AddDiscountUseCaseOutput;
import com.project.stella_boutique.service.seller.discount.get.GetDiscountUseCase;
import com.project.stella_boutique.service.seller.discount.get.GetDiscountUseCaseOutput;
import com.project.stella_boutique.service.seller.discount.remove.RemoveDiscountUseCase;
import com.project.stella_boutique.service.seller.discount.remove.RemoveDiscountUseCaseInput;
import com.project.stella_boutique.service.seller.discount.remove.RemoveDiscountUseCaseOutput;
import com.project.stella_boutique.service.seller.discount.update.UpdateDiscountUseCase;
import com.project.stella_boutique.service.seller.discount.update.UpdateDiscountUseCaseInput;
import com.project.stella_boutique.service.seller.discount.update.UpdateDiscountUseCaseOutput;
import com.project.stella_boutique.service.seller.order.get.GetOrderUseCase;
import com.project.stella_boutique.service.seller.order.get.GetOrderUseCaseOutput;
import com.project.stella_boutique.service.seller.order.update.UpdateOrderUseCase;
import com.project.stella_boutique.service.seller.order.update.UpdateOrderUseCaseInput;
import com.project.stella_boutique.service.seller.order.update.UpdateOrderUseCaseOutput;
import com.project.stella_boutique.service.seller.producct.add.AddProductUseCase;
import com.project.stella_boutique.service.seller.producct.add.AddProductUseCaseInput;
import com.project.stella_boutique.service.seller.producct.add.AddProductUseCaseOutput;
import com.project.stella_boutique.service.seller.producct.get.GetProductUseCase;
import com.project.stella_boutique.service.seller.producct.get.GetProductUseCaseOutput;
import com.project.stella_boutique.service.seller.producct.remove.RemoveProductUseCase;
import com.project.stella_boutique.service.seller.producct.remove.RemoveProductUseCaseInput;
import com.project.stella_boutique.service.seller.producct.remove.RemoveProductUseCaseOutput;
import com.project.stella_boutique.service.seller.producct.update.UpdateProductUseCase;
import com.project.stella_boutique.service.seller.producct.update.UpdateProductUseCaseInput;
import com.project.stella_boutique.service.seller.producct.update.UpdateProductUseCaseOutput;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/seller")
public class SellerRestAdapter {
    @Autowired
    AddDiscountUseCase addDiscountUseCase;

    @Autowired
    GetDiscountUseCase getDiscountUseCase;

    @Autowired
    RemoveDiscountUseCase removeDiscountUseCase;
    
    @Autowired
    UpdateDiscountUseCase updateDiscountUseCase;

    @Autowired
    GetOrderUseCase getOrderUseCase;

    @Autowired
    UpdateOrderUseCase updateOrderUseCase;

    @Autowired
    AddProductUseCase addProductUseCase;

    @Autowired
    GetProductUseCase getProductUseCase;

    @Autowired
    RemoveProductUseCase removeProductUseCase;

    @Autowired
    UpdateProductUseCase updateProductUseCase;

    @PostMapping(value= "/add/discount")
    public ResponseEntity<AddDiscountUseCaseOutput> addDiscount(@RequestBody AddDiscountUseCaseInput requestBody){
        AddDiscountUseCaseInput input = new AddDiscountUseCaseInput();
        AddDiscountUseCaseOutput output = new AddDiscountUseCaseOutput();

        try {
            this.addDiscountUseCase.execute(input, output)
        } catch (AddDiscountErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
}