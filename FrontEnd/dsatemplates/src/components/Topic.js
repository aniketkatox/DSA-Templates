import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Topic.css";
import { Link } from 'react-router-dom';
import arrayImg from "./images/array.png";
import matrixImg from "./images/matrix.png";
import recursionImg from "./images/recursion.png";
import sortingGif from "./images/sorting.png";
import binarySearchImg from "./images/binary-search.png";
import listImg from "./images/linked-list.png";
import hashmapImg from "./images/hashmap.png";
import treeImg from "./images/tree.png";
import graphImg from "./images/graph.png";
import backtrackingImg from "./images/backtracking.png";
import dynamicImg from "./images/dynamic-programming.png";
import stackImg from "./images/stack.png";
import queueImg from "./images/queue.png";
import greedyImg from "./images/greedy.png";
import heapImg from "./images/heap.png";

const Topic = ({ onSelectTopic }) => {
  const [topics, setTopics] = useState([]);
  
  // const topics = ['Array','Matrix','Recursion','Sorting','Binary Search','Linked List',
  //                 'Hashmap','Stack','Queue','Graph','Tree','Sliding Window',
  //                 'Heap','Greedy','Backtracking','Dynamic Programming'];

  const topicImages = {
    Array: arrayImg,
    Matrix: matrixImg,
    Recursion: recursionImg,
    Graph: graphImg,
    Trees: treeImg,
    "Linked List": listImg,
    Sorting: sortingGif,
    Backtracking: backtrackingImg,
    "Binary Search": binarySearchImg,
    "Dynamic Programming": dynamicImg,
    Stack: stackImg,
    Queues: queueImg,
    Greedy: greedyImg,
    Heap: heapImg,
    Hashmap: hashmapImg
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:8080/topics');
        console.log(response.data)
        setTopics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="topic-container">
      <div className="topic-card-container">
        {topics.map((topic, index) => (
          <div
            className="topic-card"
            key={index}
            onClick={() => onSelectTopic(topic)}
          >
            <Link to={`/practiceHub/${topic}`}>
            <div className='topic-icon'>
              <img  src={topicImages[topic]} className='topic-pic' alt={topic}/>
              </div>
              <div className='topic-title'>
                <p className='topic-title-text'>{topic}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
