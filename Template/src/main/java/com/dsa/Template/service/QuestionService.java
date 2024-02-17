package com.dsa.Template.service;

import com.dsa.Template.entity.Question;
import com.dsa.Template.repository.QuestionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getAllQuestionsForSubtopic(String topic,String subTopic){
        return questionRepository.getAllQuestionsForSubtopic(topic,subTopic);
    }
    @Transactional
    public void addQuestion(Question question){
        questionRepository.save(question);
    }
}
