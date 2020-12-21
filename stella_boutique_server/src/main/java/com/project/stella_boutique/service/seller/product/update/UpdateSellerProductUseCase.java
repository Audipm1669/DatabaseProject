package com.project.stella_boutique.service.seller.product.update;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.UpdateProductErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UpdateSellerProductUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public UpdateSellerProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(UpdateSellerProductUseCaseInput input, UpdateSellerProductUseCaseOutput output) throws UpdateProductErrorException {
        
    }
}