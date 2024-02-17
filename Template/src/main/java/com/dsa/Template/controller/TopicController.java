package com.dsa.Template.controller;

import com.dsa.Template.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics")
@CrossOrigin(origins = "http://localhost:3000")
public class TopicController {
        @Autowired
        private TopicService topicService;
        @GetMapping()
        public List<String> getAllTopics() {
            return topicService.getAllTopics();
        }
    }
