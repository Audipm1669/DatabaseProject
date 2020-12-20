package com.project.stella_boutique.service.guest.product;

import java.util.List;

import com.project.stella_boutique.model.order.Order;

public class GetOrderUseCaseOutput {
    private List<Order> orderList;

    public void setOrderList(List<Order> orderList) {
        this.orderList = orderList;
    }

    public List<Order> getProductList() {
        return this.orderList;
    }
}