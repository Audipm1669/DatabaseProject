package com.project.stella_boutique.service.guest.rate;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Rate;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetRateUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetRateUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetRateUseCaseOutput output){
        
    }
}