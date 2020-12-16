package com.project.stella_boutique.model.order;

public class Order {

    private int orderID;
    private int status;
    private String orderDate;
    private int discountID;
	private int userID;
	
	public Order(int orderID, int status, String orderDate, int discountID, int userID){
		this.orderID = orderID;
		this.status = status;
		this.orderDate = orderDate;
		this.discountID = discountID;
		this.userID = userID;
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

     
}