package com.dsa.Template.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SubTopicRepository {

    @PersistenceContext
    EntityManager entityManager;

    public List<String> findSubtopicsForTopic(String topic) {
        String jpql = "SELECT DISTINCT q.subTopic FROM questionlist q WHERE q.topic = :topic";
        TypedQuery<String> query = entityManager.createQuery(jpql, String.class);
        query.setParameter("topic", topic);
        List<String> allSubtopicsForTopic = query.getResultList();
        return allSubtopicsForTopic;
    }
}

