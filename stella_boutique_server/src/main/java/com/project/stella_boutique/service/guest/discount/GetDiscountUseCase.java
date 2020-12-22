package com.project.stella_boutique.service.guest.discount;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.discount.Discount;
import com.project.stella_boutique.service.exception.GetDiscountErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetDiscountUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetDiscountUseCaseInput input, GetDiscountUseCaseOutput output) throws GetDiscountErrorException {
        //code
    }
}