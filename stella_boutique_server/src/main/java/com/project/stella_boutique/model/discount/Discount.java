package com.project.stella_boutique.model.discount;

public class Discount {

    private int discountID;
    private Float value;
    private String discountName;
    private String startDate;
	private String endDate;
	private String code;

	public Discount(int discountID, Float value, String discountName, String startDate, String endDate, String code) {
		this.discountID = discountID;
		this.value = value;
		this.discountName = discountName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.code = code;
	}

	public int getDiscountID() {
		return this.discountID;
	}

	public void setDiscountID(int discountID) {
		this.discountID = discountID;
	}

	public Float getValue() {
		return this.value;
	}

	public void setValue(Float value) {
		this.value = value;
	}

	public String getDiscountName() {
		return this.discountName;
	}

	public void setDiscountName(String discountName) {
		this.discountName = discountName;
	}

	public String getStartDate() {
		return this.startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return this.endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}