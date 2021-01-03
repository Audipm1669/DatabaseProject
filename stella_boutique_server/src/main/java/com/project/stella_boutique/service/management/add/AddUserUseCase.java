package com.project.stella_boutique.service.management.add;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.user.User;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class AddUserUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public AddUserUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }
    private void execute(String username, String password, String fullname, String birthday, String address, String phoneNumber, String email) {
        try(Connection connection = this.mysqlDriver.getConnection()) {
            try (PreparedStatement stmt = connection.prepareStatement(
                    "INSERT INTO `user`" +
                    "(`id`, `password`, `fullname`, `username`, `birthday`, `address`, `phoneNumber`, `email`)" +
                    "VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
                )) {
                    stmt.setString(1, "NULL");
                    stmt.setString(2, password);
                    stmt.setString(3, fullname);
                    stmt.setString(4, username);
                    stmt.setString(5, birthday);
                    stmt.setString(6, address);
                    stmt.setString(7, phoneNumber);
                    stmt.setString(8, email);

                    stmt.executeUpdate();
                }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }   
}