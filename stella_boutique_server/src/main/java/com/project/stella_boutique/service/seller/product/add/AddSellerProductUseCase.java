package com.project.stella_boutique.service.seller.product.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.AddProductErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddSellerProductUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddSellerProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddSellerProductUseCaseInput input, AddSellerProductUseCaseOutput output) throws AddProductErrorException {
        //code
    }
}