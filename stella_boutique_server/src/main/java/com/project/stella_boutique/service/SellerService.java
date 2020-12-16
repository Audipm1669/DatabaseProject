package com.project.stella_boutique.service;

import com.project.stella_boutique.adapter.database.MysqlDriver;
import com.project.stella_boutique.service.GuestService;

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

public class SellerService {

    private MysqlDriver mysqlDriver = new MysqlDriver();
   
    public List<Item> GetProduct(){
        List<Item> productList = new ArrayList<>();    
        try(Connection connection = this.mysqlDriver.getConnection()){
            try (PreparedStatement stmt = connection.prepareStatement(
                "SELECT * FROM `item`")) {
                try (ResultSet rs = stmt.executeQuery()) {
                    while(rs.next()) {
                        int id = Integer.parseInt(rs.getString("ItemID"));
                        String name = rs.getString("Name");
                        int quantity = Integer.parseInt(rs.getString("Quantity"));
                        String category = rs.getString("Category");
                        String size = rs.getString("Size");
                        Float price = rs.getFloat("Price");
                        String description = rs.getString("Description");
                        String pictureURL = rs.getString("PictureURL");
    
                        Item item = new Item(id, name, quantity, category, size, price, description, pictureURL);
                        productList.add(item);
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
        return productList;
    }

    public List<Discount> GetDiscount(){
        List<Discount> discountList = new ArrayList<>();   
        try(Connection connection = this.mysqlDriver.getConnection()){
            try (PreparedStatement stmt = connection.prepareStatement(
                "SELECT * FROM `discount`")) {
                try (ResultSet rs = stmt.executeQuery()) { 
                    while(rs.next()) {
                        int id = Integer.parseInt(rs.getString("ItemID"));
                        Float value = rs.getFloat("Value");
                        String discountName = rs.getString("DiscountName");
                        String startDate = rs.getString("StartDate");
                        String endDate = rs.getString("EndDate");
                        String code = rs.getString("Code");

                        Discount disc = new Discount(id, value, discountName, startDate, endDate, code);
                        discountList.add(disc);
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
        return discountList;
    }

    /*

    public void AddProduct(){
       insert into product
    }
    public void UpdateProduct(){
        update product
    }
    public void RemoveProduct(){
        delete from product
    }
    
    public void AddDiscount(){
       insert into product
    }
    public void UpdateDiscount(){
        update product
    }
    public void RemovePDiscount(){
        delete from product
    }

    public void UpdateOrderStatus(){
        update order entity (order status)
    }

    public GetOrderList(){
        get all the user order from order join itemlist(amount) join item(name) join disc(disc name)
    }
    */

}
