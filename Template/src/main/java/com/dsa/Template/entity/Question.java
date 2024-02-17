package com.dsa.Template.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "questionlist") // Make sure the entity name matches the table name in MySQL
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private int questionId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(name = "question_link", length = 255)
    private String questionLink;

    @Column(name = "solution_link", length = 255)
    private String solutionLink;

    @Column(length = 255)
    private String topic;

    @Column(name = "sub_topic", length = 255)
    private String subTopic;

    @Column(length = 255)
    private String difficulty;
}
