package com.project.stella_boutique.service.seller.product.remove;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.RemoveProductErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class RemoveSellerProductUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public RemoveSellerProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(RemoveSellerProductUseCaseInput input, RemoveSellerProductUseCaseOutput output) throws RemoveProductErrorException{
        //code
    }
}