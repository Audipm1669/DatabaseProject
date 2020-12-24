package com.project.stella_boutique.service.seller.discount.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.discount.Discount;
import com.project.stella_boutique.service.exception.GetDiscountErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetSellerDiscountUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetSellerDiscountUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetSellerDiscountUseCaseOutput output) throws GetDiscountErrorException {
        //code
    }
}