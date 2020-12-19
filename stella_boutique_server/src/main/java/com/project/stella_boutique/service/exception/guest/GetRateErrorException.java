package com.project.stella_boutique.service.exception.guest;

public class GetRateErrorException extends Exception{
    public GetRateErrorException() {
        super("Error occurred during getting rates");
    }
}