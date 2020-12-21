package com.project.stella_boutique.service.seller.product.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.GetProductErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetSellerProductUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetSellerProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetSellerProductUseCaseOutput output) throws GetProductErrorException {
        //Code
    }
}