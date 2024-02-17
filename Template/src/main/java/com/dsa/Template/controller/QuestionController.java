package com.dsa.Template.controller;

import com.dsa.Template.entity.Question;
import com.dsa.Template.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @GetMapping("/topics/{topic}/{subTopic}")
    public List<Question> getAllQuestionsForSubtopic(
            @PathVariable String topic,
            @PathVariable String subTopic) {
        return questionService.getAllQuestionsForSubtopic(topic, subTopic);
    }
    @PostMapping("/addQuestion")
    public void addQuestion(@RequestBody Question question){
        questionService.addQuestion(question);
    }
}
