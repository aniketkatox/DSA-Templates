package com.dsa.Template.repository;

import com.dsa.Template.entity.Question;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class QuestionRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Question> getAllQuestionsForSubtopic(String topic,String subTopic){
        String jpql = "SELECT q FROM questionlist q WHERE q.topic = :topic AND q.subTopic = :subTopic";
        TypedQuery<Question> query = entityManager.createQuery(jpql, Question.class);
        query.setParameter("topic", topic);
        query.setParameter("subTopic", subTopic);
        List<Question> questions = query.getResultList();
        return questions;
    }

    @Transactional
    public void save(Question question){
        entityManager.persist(question);
    }

}
