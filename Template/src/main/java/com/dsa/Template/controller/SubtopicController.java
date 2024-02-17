package com.dsa.Template.controller;

import com.dsa.Template.service.SubtopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics/{topic}")
@CrossOrigin(origins = "http://localhost:3000")
public class SubtopicController {
    @Autowired
    private SubtopicService subtopicService;

    @GetMapping
    public List<String> getAllSubtopicsForTopic(@PathVariable String topic) {
        return subtopicService.getAllSubtopicsForTopic(topic);
    }
}