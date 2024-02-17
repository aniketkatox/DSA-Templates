import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './SubTopic.css';
import Question from './Question';

const SubTopic = ({ topic }) => {
  const [subTopics, setSubTopics] = useState([]);
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);
  const [activeSubTopicIndex, setActiveSubTopicIndex] = useState(null);

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topics/${topic}`);
        console.log(response.status);
        setSubTopics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubTopics();
  }, [topic]);

  const handleSubTopicClick = (subTopic,index) => {
    setSelectedSubTopic(subTopic);
    setActiveSubTopicIndex(index);
  };

  return (
    <div className="subTopic-container">
      <div className="subTopic-card-container">
      {subTopics.map((subTopic, index) => (
        <div
          className={`subTopic-card ${activeSubTopicIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => handleSubTopicClick(subTopic, index)}
        >
          <h1>{subTopic}</h1>
        </div>
      ))}

      </div>
      <div className="question-container">
        {selectedSubTopic && (
          <Question topic={topic} subTopic={selectedSubTopic} />
        )}
      </div>
    </div>
  );
};

export default SubTopic;
