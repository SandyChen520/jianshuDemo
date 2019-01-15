package com.example.jianshudemo.config;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class ActivemqConsumer {

    @JmsListener(destination = "ay.queue.asyn.save")
    public void receiveMessageFromQueue(String text){
        System.out.println("订阅 【 "+text+ "】success!");
    }
}
