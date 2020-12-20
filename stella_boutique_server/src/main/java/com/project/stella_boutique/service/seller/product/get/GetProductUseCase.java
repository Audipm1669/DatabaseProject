package com.project.stella_boutique.service.seller.product.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetProductUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseOutput output){
        //Code
    }
}