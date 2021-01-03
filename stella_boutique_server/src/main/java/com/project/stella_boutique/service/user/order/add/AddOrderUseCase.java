package com.project.stella_boutique.service.user.order.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.AddOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
@Service
public class AddOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddOrderUseCase(MysqlDriver mysqlDriver) {
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(AddOrderUseCaseInput input, AddOrderUseCaseOutput output) throws AddOrderErrorException {
        System.out.println("gogo");
        // try(Connection connection = this.mysqlDriver.getConnection()) {
        //     try (PreparedStatement stmt = connection.prepareStatement(
        //             "INSERT INTO `order`" +
        //             "(`orderDate`,`status`,`orderUserID`)" +
        //             "VALUES(?, ?, ?)"
        //         )) {
        //             stmt.setString(1, input.getOrderDateString());
        //             stmt.setString(2, String.valueOf(input.getStatus()));
        //             stmt.setString(3, String.valueOf(input.getUserID()));

        //             stmt.executeUpdate();
        //         }
        // } catch (SQLException e) {
        //     e.printStackTrace();
        // }
    }   
}
