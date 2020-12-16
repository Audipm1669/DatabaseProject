package com.project.stella_boutique.service;

import com.project.stella_boutique.adapter.database.MysqlDriver;

import com.project.stella_boutique.model.discount.Discount;
import com.project.stella_boutique.model.item.*;
import com.project.stella_boutique.model.order.Order;
import com.project.stella_boutique.model.user.User;
import com.project.stella_boutique.service.GuestService;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class GuestService {

    private MysqlDriver mysqlDriver = new MysqlDriver();

    // public List<Item> GetProduct() {
    //     //get product if quantity !=0
    // }

    // public List<Discount> GetDiscount() {
    //     //get discount if current date is between the start & end date
    // }

    public List<Rate> GetRate() {
        List<Rate> rateList = new ArrayList<>();   
        try(Connection connection = this.mysqlDriver.getConnection()){
            try (PreparedStatement stmt = connection.prepareStatement(
                "SELECT * FROM `rate`")) {
                try (ResultSet rs = stmt.executeQuery()) { 
                    while(rs.next()) {
                        int rateID = Integer.parseInt(rs.getString("RateID"));
                        int userID = Integer.parseInt(rs.getString("User"));
                        int itemID = Integer.parseInt(rs.getString("ItemID"));
                        String comment = rs.getString("Comment");
                        int rate = rs.getInt("Rate");

                        Rate rating = new Rate(rateID, itemID, userID, comment, rate); 
                        rateList.add(rating);
                    }
                }catch (SQLException e) {
                    e.printStackTrace();
                }
            }catch (SQLException e) {
                e.printStackTrace();
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return rateList;
    }

}
