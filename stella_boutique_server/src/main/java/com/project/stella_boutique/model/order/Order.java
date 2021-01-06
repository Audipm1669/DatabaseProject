package com.project.stella_boutique.model.order;

import java.util.List;
import java.util.ArrayList;
import com.project.stella_boutique.model.item.Item;

public class Order {

    private int orderID;
    private int status;
    private String orderDate;
    private int discountID;
	private int userID;
	private List<List<Object>> itemList;
	private List<Integer> Price;
	private int totalPrice;
	private double value;

	public Order(int orderID, int status, String orderDate, int discountID, int userID){
		this.orderID = orderID;
		this.status = status;
		this.orderDate = orderDate;
		this.discountID = discountID;
		this.userID = userID;
		this.itemList = new ArrayList<List<Object>>();
		this.Price = new ArrayList<Integer>();
		this.totalPrice = 0;
	}

	public int getOrderID() {
		return this.orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getOrderDate() {
		return this.orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public int getDiscountID() {
		return this.discountID;
	}

	public void setDiscountID(int discountID) {
		this.discountID = discountID;
	}

	public int getUserID() {
		return this.userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

     
	public List<List<Object>> getItemList() {
		return this.itemList;
	}

	public void setItemList(List<List<Object>> itemList) {
		this.itemList = itemList;
	}

	public void addItemToList(Item item,int amount) {
		List<Object> order = new ArrayList<Object>();
		order.add(item);
		order.add(amount);
		this.itemList.add(order);
	}

	public double getTotalPrice() {
		System.out.println("total price");
		if(this.discountID!=1){
			double sum = 0;
			for(int i = 0; i<this.Price.size();i++){
				sum+=this.Price.get(i);
			}
			
			System.out.println(sum);
			System.out.println(value);
			sum = (double)sum*value;
			
			System.out.println(sum);
			return sum;
		}else{
			double sum = 0;
			for(int i = 0; i<this.Price.size();i++){
				sum+=this.Price.get(i);
			}
			System.out.println(sum);
			sum = (double)sum;
			return sum;
		}
		
	}

	public void setPrice(int Price) {
		this.Price.add(Price);
	}
	public List<Integer>  getPrice() {
		return this.Price;
	}

	public double getValue() {
		return this.value;
	}

	public void setValue(double value) {
		this.value = value;
	}
	
}