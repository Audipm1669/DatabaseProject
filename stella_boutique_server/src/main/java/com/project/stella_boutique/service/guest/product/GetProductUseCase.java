package com.project.stella_boutique.service.guest.product;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.guest.GetProductErrorException;

import org.springframework.stereotype.Service;

@Service
public class GetProductUseCase {
    private MysqlDriver mysqlDriver;

    public GetProductUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetProductUseCaseOutput output) throws GetProductErrorException{
        
    }
}