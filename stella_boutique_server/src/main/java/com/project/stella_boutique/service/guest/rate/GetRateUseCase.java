package com.project.stella_boutique.service.guest.rate;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.item.Rate;

import org.springframework.stereotype.Service;

@Service
public class GetRateUseCase {
    private MysqlDriver mysqlDriver;

    public GetRateUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetRateUseCaseOutput output){
        
    }
}