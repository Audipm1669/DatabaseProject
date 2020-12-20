package com.project.stella_boutique.service.seller.discount.remove;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.discount.Discount;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class RemoveDiscountUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public RemoveDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseInput input, GetDiscountUseCaseOutput output){
        //code
    }
}