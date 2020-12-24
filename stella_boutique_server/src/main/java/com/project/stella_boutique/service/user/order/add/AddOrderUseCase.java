package com.project.stella_boutique.service.user.order.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.AddOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddOrderUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddOrderUseCaseInput input, AddOrderUseCaseOutput output) throws AddOrderErrorException {
        //code
    }
}