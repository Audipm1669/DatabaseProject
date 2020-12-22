package com.project.stella_boutique.model.item;

public class Item {
    
    private int itemID;
    private int quantity;
    private String category;
    private String size;
    private Float price;
    private String description;
    private String pictureURL;
    private String name;

	public Item(int itemID, String name, int quantity, String category, String size ,Float price, String description, String pictureURL){
		this.itemID = itemID;
		this.name = name;
		this.quantity = quantity;
		this.category = category;
		this.size = size;
		this.price = price;
		this.description = description;
		this.pictureURL = pictureURL;
	}

	public int getItemID() {
		return this.itemID;
	}

	public void setItemID(int itemID) {
		this.itemID = itemID;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSize() {
		return this.size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public Float getPrice() {
		return this.price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPictureURL() {
		return this.pictureURL;
	}

	public void setPictureURL(String pictureURL) {
		this.pictureURL = pictureURL;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

    
    
}