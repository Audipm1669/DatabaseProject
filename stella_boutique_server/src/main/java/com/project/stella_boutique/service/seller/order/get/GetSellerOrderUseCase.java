package com.project.stella_boutique.service.seller.order.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.order.Order;
import com.project.stella_boutique.service.exception.GetOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetSellerOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetSellerOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetSellerOrderUseCaseOutput output) throws GetOrderErrorException {
        //code
    }
}