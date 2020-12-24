package com.project.stella_boutique.service.user.order.item.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.AddIntoOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddIntoOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddIntoOrderUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddIntoOrderUseCaseInput input, AddIntoOrderUseCaseOutput output) throws AddIntoOrderErrorException {

    }
}