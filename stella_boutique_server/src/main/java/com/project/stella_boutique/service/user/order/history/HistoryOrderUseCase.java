package com.project.stella_boutique.service.user.order.history;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.exception.HistoryOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.lang.Math;
import java.util.List;
import java.util.ArrayList;
import com.project.stella_boutique.model.order.Order;
import com.project.stella_boutique.model.item.Item;

@Service
public class HistoryOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public HistoryOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(HistoryOrderUseCaseInput input, HistoryOrderUseCaseOutput output) throws HistoryOrderErrorException {
        System.out.println("getting order list");
        List<Order> orderList = new ArrayList<>();    
        try(Connection connection=this.mysqlDriver.getConnection()){
            try (PreparedStatement stmt = connection.prepareStatement(
                "SELECT * FROM `order` WHERE `orderUserID`= ? ")) {
                    stmt.setString(1, Integer.toString(input.getUserID()));
                try (ResultSet rs = stmt.executeQuery()) {
                    while(rs.next()) {
                        int id = Integer.parseInt(rs.getString("id"));
                        String orderDate = rs.getString("orderDate");
                        int status = Integer.parseInt(rs.getString("status"));
                        String discount =  rs.getString("discountID");
                        int discountID = Integer.parseInt(rs.getString("discountID"));

                        Order order = new Order(id,status,orderDate,discountID,input.getUserID());
                        getItemOrder(connection,order);
                        getDiscountValue(connection,discountID,order);
                        orderList.add(order);
                    }
                }   
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
        output.setOrderList(orderList);
    }
    public void getItemOrder(Connection connection, Order order){
        try (PreparedStatement stmt = connection.prepareStatement(
            "SELECT * FROM `itemlist` WHERE `orderID` =  ?")) {
                stmt.setString(1, Integer.toString(order.getOrderID()));
            try (ResultSet rs = stmt.executeQuery()) {
                while(rs.next()) {
                    int id = Integer.parseInt(rs.getString("orderItemID"));
                    int amount = Integer.parseInt(rs.getString("amount"));
                    System.out.println("go to get item");
                    System.out.println(id);
                    Item item = getItemByID(connection,id);
                    System.out.println(item.getName());
                    order.addItemToList(item,amount);
                    System.out.println(item.getPrice());
                    int price = Math.round(item.getPrice()) * amount;
                    order.setPrice(price);
                }
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public Item getItemByID(Connection connection,int itemID){
        Item item = new Item();
        try (PreparedStatement stmt = connection.prepareStatement(
            "SELECT * FROM `item` WHERE `id` = ?")) {
                stmt.setString(1, Integer.toString(itemID));
            try (ResultSet rs = stmt.executeQuery()) {
                while(rs.next()) {
                    int id = Integer.parseInt(rs.getString("id"));
                    String name = rs.getString("name");
                    int quantity = Integer.parseInt(rs.getString("quantity"));
                    String category = rs.getString("category");
                    String size = rs.getString("size");
                    Float price = rs.getFloat("price");
                    String description = rs.getString("description");
                    String pictureURL = rs.getString("pictureURL");

                    System.out.println("get item");
                    System.out.println(name);

                    item.setItemID(id);
                    item.setName(name);
                    item.setQuantity(quantity);
                    item.setCategory(category);
                    item.setSize(size);
                    item.setPrice(price);
                    item.setDescription(description);
                    item.setPictureURL(pictureURL);
                }
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return item;
    }
    public void getDiscountValue(Connection connection,int discountID,Order order){
        System.out.println("---------get discount value--------");
        try (PreparedStatement stmt = connection.prepareStatement(
            "SELECT `value` FROM `discount` WHERE `id`= ?")) {
                stmt.setString(1, String.valueOf(discountID));
            try (ResultSet rs = stmt.executeQuery()) {
                while(rs.next()) {
                    double value = rs.getDouble("value");

                    System.out.println("disocunt");
                    System.out.println(value);
                    order.setValue(value);
                }
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
}