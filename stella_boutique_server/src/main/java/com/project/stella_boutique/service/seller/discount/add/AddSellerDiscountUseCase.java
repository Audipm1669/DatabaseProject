package com.project.stella_boutique.service.seller.discount.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.discount.Discount;
import com.project.stella_boutique.service.exception.AddDiscountErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddSellerDiscountUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddSellerDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddSellerDiscountUseCaseInput input, AddSellerDiscountUseCaseOutput output) throws AddDiscountErrorException{
        //code
    }
}