package com.project.stella_boutique.service.seller.order.update;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.order.Order;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UpdateOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public UpdateOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseOutput output){
        //code
    }
}