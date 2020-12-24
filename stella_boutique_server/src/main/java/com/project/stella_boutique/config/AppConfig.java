package com.project.stella_boutique.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import com.project.stella_boutique.adapter.database.MysqlDriver;

@Configuration
@ComponentScan
public class AppConfig {
    @Bean
    public MysqlDriver getMysqlDriver(){
        return new MysqlDriver();
    }
}