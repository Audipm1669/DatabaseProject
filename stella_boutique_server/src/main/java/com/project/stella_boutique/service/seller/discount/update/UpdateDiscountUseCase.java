package com.project.stella_boutique.service.seller.discount.update;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.discount.Discount;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UpdateDiscountUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public UpdteDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseInput input, GetDiscountUseCaseOutput output){
        //code
    }
}