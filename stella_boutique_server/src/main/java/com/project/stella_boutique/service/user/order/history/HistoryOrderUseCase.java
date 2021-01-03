package com.project.stella_boutique.service.user.order.history;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.HistoryOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class HistoryOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public HistoryOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(HistoryOrderUseCaseInput input, HistoryOrderUseCaseOutput output) throws HistoryOrderErrorException {
        //code
    }
}