package com.project.stella_boutique.service.user.order.add;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.ParseException;

public class AddOrderUseCaseInput {
    private Date orderDate;
    private int status;
    private String discountID;
    private int userID;

    public void AddOrderUseCaseInput(){

    }

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getDiscountID() {
		return this.discountID;
	}

	public void setDiscountID(String discountID) {
		this.discountID = discountID;
	}

	public int getUserID() {
		return this.userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

    public static final String DATE_FORMAT = "yyyy/MM/dd";
    
	public Date getOrderDate() {
		return this.orderDate;
	}

	public void setOrderDate(String orderDate) {
        final SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_FORMAT);
        try {
            this.orderDate = dateFormat.parse(orderDate);
        } catch (final ParseException e) {
            throw new IllegalArgumentException("Invalid Current Date: " + orderDate);
        }
    }

    public String getOrderDateString() {
		return ToString(this.orderDate);
	}

	public String ToString(Date date) {
        return (new SimpleDateFormat(this.DATE_FORMAT)).format(date);
    }
}