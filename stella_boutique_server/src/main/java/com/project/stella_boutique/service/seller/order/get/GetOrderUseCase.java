package com.project.stella_boutique.service.seller.order.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.order.Order;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseOutput output){
        //code
    }
}