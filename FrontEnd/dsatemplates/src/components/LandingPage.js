import React from 'react';
import "./LandingPage.css";
import pic1 from "./images/subTopics_pic.jpeg";
import list_pic2 from "./images/list_pic2.jpeg";
import topics_pic from "./images/topics_pic.jpeg";


const LandingPage = () => {
    return (
        <div className="homeContainer">
            <div className='homeHeading'>
                <h1>Code Better</h1>
                <p>Work hard smartly.</p>
            </div>

            <div className='homeTagLine'>
                <p>DSA Question Templates: Empowering Your Preparation, Your Roadmap to Problem Solving Proficiency.</p>
            </div>


            <div className='container'>
                <div className='image-container'>
                    
                    <img src={topics_pic} alt="Hustle Hard" className="center-image" />
                    <div className="text-container">
                        <p className='text'>Master DSA with Targeted Practice Questions.</p>
                        <ol className='list'>
                            <li>Prepare effectively with topic-wise practice questions.</li>
                            <li>Strengthen understanding with focused practice questions.</li>
                            <li>Achieve proficiency in data structures and algorithms topics.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='image-container'>
                    <img src={pic1} alt="Practice Hard" className="center-image" />
                    <div className="text-container">
                        <p className='text'>Explore subtopics based on Templates</p>
                        <ol className='list'>
                            <li>Explore specific techniques with subtopic-based learning.</li>
                            <li>Master subtopics with templates to improve DSA skills.</li>
                            <li>Develop coding interview skills with templates.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='image-container'>
                    <img src={list_pic2} alt="Play Hard" className="center-image" />
                    <div className="text-container">
                        <p className='text'>Monitor Your Progress with Interactive Question Tracking.</p>
                        <ol className='list'>
                            <li>Easily monitor and track your DSA progress.</li>
                            <li>Interactive question tracking for better monitoring.</li>
                            <li>Fuel your motivation by monitoring your progress.</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
