package com.project.stella_boutique.service.user.like.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.GetLikeErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class GetLikeUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetLikeUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetLikeUseCaseInput input, GetLikeUseCaseOutput output) throws GetLikeErrorException {
        //code
    }
}