package com.project.stella_boutique.service.user.like.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.AddLikeErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddLikeUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddLikeUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddLikeUseCaseInput input, AddLikeUseCaseOutput output) throws AddLikeErrorException{
        //code 
    }
}