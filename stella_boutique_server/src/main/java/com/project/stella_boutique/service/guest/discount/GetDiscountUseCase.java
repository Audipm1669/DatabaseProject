package com.project.stella_boutique.service.guest.discount;

import com.project.stella_boutique.adapter.database.MysqlDriver;

import com.project.stella_boutique.model.discount.Discount;

import org.springframework.stereotype.Service;

@Service
public class GetDiscountUseCase {

    private MysqlDriver mysqlDriver;

    public GetDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseOutput output){
        
    }
}