package com.example.jianshudemo;

import com.example.jianshudemo.api.NoteApi;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//@EnableCaching
//@SpringBootApplication
//@EnableSwagger2
//public class JianshudemoApplication extends SpringBootServletInitializer {
//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
//        return builder.sources(JianshudemoApplication.class);
//    }
//    public static void main(String[] args) {
//        SpringApplication.run(JianshudemoApplication.class, args);
//    }
//
//}

@EnableCaching
@SpringBootApplication
@EnableSwagger2
public class JianshudemoApplication{

    public static void main(String[] args) {
        SpringApplication.run(JianshudemoApplication.class, args);
    }

}