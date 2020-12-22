package com.project.stella_boutique.service.user.order.cancel;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.CancelOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CancelOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public CancelOrderUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(CancelOrderUseCaseInput input, CancelOrderUseCaseOutput output) throws CancelOrderErrorException {
        //code
    }
}