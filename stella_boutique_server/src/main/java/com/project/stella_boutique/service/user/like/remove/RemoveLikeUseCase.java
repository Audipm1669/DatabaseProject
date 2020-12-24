package com.project.stella_boutique.service.user.like.remove;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.RemoveLikeErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class RemoveLikeUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public RemoveLikeUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(RemoveLikeUseCaseInput input, RemoveLikeUseCaseOutput output) throws RemoveLikeErrorException {
        //code
    }
}