package com.dsa.Template.service;

import com.dsa.Template.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    public TopicRepository topicRepository;
    public List<String> getAllTopics(){
        return topicRepository.findAllTopics();
    }

}
