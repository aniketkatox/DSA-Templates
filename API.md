# DSA Templates App API Documentation

## Get All Topics

Retrieve all available topics.

**Endpoint**

### GET /topics

**Response**

- Status Code: 200 OK
- Content-Type: application/json

```json
[
    {
        "topicId": 1,
        "topicTitle": "Arrays",
        "subTopic": "Two Pointers"
    },
    {
        "topicId": 2,
        "topicTitle": "Linked Lists",
        "subTopic": "fast and slow pointers"
    },
    {
        "topicId": 3,
        "topicTitle": "Backtracking",
        "subTopic": "subset Sum"
    }
]
```

## Get Subtopics of a Topic
## Retrieve all subtopics of a given topic.


**Endpoint**

### GET /topics/{topic}/subTopics

**Response**

- Status Code: 200 OK
- Content-Type: application/json


```json

[
    {
        "subTopicId": 1,
        "subTopicTitle": "Two Pointers",
        "difficultyLevel": "Medium"
    },
    {
        "subTopicId": 2,
        "subTopicTitle": "Fast and Slow Pointers",
        "difficultyLevel": "Easy"
    },
    {
        "subTopicId": 3,
        "subTopicTitle": "Subset Sum",
        "difficultyLevel": "Hard"
    }
]

```

## Get Questions of a Subtopic
## Retrieve all questions of a given subtopic of a topic


**Endpoint**

### GET /topics/{topic}/{subTopic}/Questions

**Response**

- Status Code: 200 OK
- Content-Type: application/json



```json

[
    {
        "questionId": 1,
        "questionTitle": "Find the pair with a given sum in the array",
        "difficultyLevel": "Medium"
    },
    {
        "questionId": 2,
        "questionTitle": "Remove Nth Node From End of List",
        "difficultyLevel": "Easy"
    },
    {
        "questionId": 3,
        "questionTitle": "Combination Sum",
        "difficultyLevel": "Hard"
    }
]

```

### Error Responses
- Status Code: 404 Not Found
- Content-Type: application/json

```json

{
    "error": "Resource not found"
}

```
