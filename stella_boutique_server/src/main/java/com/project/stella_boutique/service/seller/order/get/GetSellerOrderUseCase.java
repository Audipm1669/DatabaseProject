package com.project.stella_boutique.service.seller.order.get;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.model.order.Order;
import com.project.stella_boutique.model.item.Item;
import com.project.stella_boutique.service.exception.GetOrderErrorException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.List;
import java.util.ArrayList;

@Service
public class GetSellerOrderUseCase {
    @Autowired
    private MysqlDriver mysqlDriver;

    public GetSellerOrderUseCase(MysqlDriver mysqlDriver){
        this.mysqlDriver = mysqlDriver;
    }

    public void execute(GetSellerOrderUseCaseOutput output) throws GetOrderErrorException {
        List<Order> orderList = new ArrayList<>();   
        try(Connection connection = this.mysqlDriver.getConnection()){
            try (PreparedStatement stmt = connection.prepareStatement(
                "SELECT * FROM `order`")) {
                try (ResultSet rs = stmt.executeQuery()) { 
                    while(rs.next()) {
                        int id = Integer.parseInt(rs.getString("id"));
                        int status = Integer.parseInt(rs.getString("status"));
                        String orderDate = rs.getString("orderDate");
                        int discountID = Integer.parseInt(rs.getString("discountID"));
                        int userID = Integer.parseInt(rs.getString("userID"));

                        Order order = new Order(id, status, orderDate, discountID, userID);
                        getItemList(order,connection);
                        orderList.add(order);
                    }
                }
            }
        }catch (SQLException e) {
            System.out.println("Unable to Get Order from MySQL~~");
            e.printStackTrace();
        }
        output.setOrderList(orderList);
    }

    public void getItemList(Order order,Connection connection){
        Item boughtItem = new Item();
        try (PreparedStatement stmt = connection.prepareStatement(
            "select * from itemlist il join item i where il.orderItemId = i.id and il.orderID = ?")) {
                stmt.setString(1, Integer.toString(order.getOrderID()));
            try (ResultSet rs = stmt.executeQuery()) {
                while(rs.next()) {
                    int itemID = Integer.parseInt(rs.getString("orderItemID"));
                    int amount = Integer.parseInt(rs.getString("amount"));
                    int id = Integer.parseInt(rs.getString("id"));
                    String name = rs.getString("name");
                    int quantity = Integer.parseInt(rs.getString("quantity"));
                    String category = rs.getString("category");
                    String size = rs.getString("size");
                    Float price = rs.getFloat("price");
                    String description = rs.getString("description");
                    String pictureURL = rs.getString("pictureURL");
    
                    boughtItem.setItemID(id);
                    boughtItem.setName(name);
                    boughtItem.setQuantity(quantity);
                    boughtItem.setCategory(category);
                    boughtItem.setSize(size);
                    boughtItem.setPrice(price);
                    boughtItem.setDescription(description);
                    boughtItem.setPictureURL(pictureURL);            

                    order.addItemToList(boughtItem,amount);
                }
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }   
}