package com.dsa.Template.service;

import com.dsa.Template.repository.SubTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubtopicService {

    @Autowired
    private SubTopicRepository subTopicRepository;
    public List<String> getAllSubtopicsForTopic(String topic){
        return subTopicRepository.findSubtopicsForTopic(topic);
    }
}
