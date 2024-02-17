package com.dsa.Template.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TopicRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<String> findAllTopics() {
        String jpql = "SELECT DISTINCT q.topic FROM questionlist q";
        TypedQuery<String> query = entityManager.createQuery(jpql, String.class);
        List<String> allTopics = query.getResultList();
        return allTopics;
    }
}
