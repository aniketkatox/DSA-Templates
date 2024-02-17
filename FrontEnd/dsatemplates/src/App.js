import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topic from "./components/Topic";
import SubTopic from "./components/SubTopic";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const storedTopic = JSON.parse(localStorage.getItem('topic'));
    if (storedTopic) {
      onSelectTopic(storedTopic);
    }
  }, []);

  const onSelectTopic = (selectedTopic) => {
    localStorage.setItem('topic', JSON.stringify(selectedTopic));
    setTopic(selectedTopic);
  };
  return (
    <BrowserRouter> 
      <div className="components" >
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/community" element={<Community/>}/>
          <Route path="/practiceHub" element={<Topic onSelectTopic={onSelectTopic} />} />
          <Route path="/practiceHub/:topic" element={<SubTopic topic={topic} />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
