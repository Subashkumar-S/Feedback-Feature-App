import React, { useState, useEffect } from "react";
import "./App.css";
import AnswerFilter from "./components/AnswerFilter/AnswerFilter";
import Back from "./components/Back/Back";
import Navbar from "./components/Navbar/Navbar";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Feature from "./components/Feature/Feature.jsx"
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Back />
      <div className="QA-container">
        <Question />
        {windowWidth < 768 ? (
          <>
            <Question />
            <Question />
          </>
        ) : (
          <>
            <AnswerFilter />
            <Answer />
          </>
        )}
      </div>
      <Feature />
    </div>
  );
}

export default App;
