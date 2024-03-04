import React, { useState, useEffect } from 'react'
import { eye, startup, info, message } from '../../assets'
import "./question.css"
const Question = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='question-container'>
      <div className="question-heading">
        {windowWidth < 864 ?
          (
            <div className='datePosted'>
              <p>Posted on 28, Jun 2023</p>
            </div>
          ) :
          (
            <div className='question-details'>
              <p>Design</p>
              <p>Technology</p>
            </div>
          )
        }
        <div className="image-heading">
          <img src={startup} alt="rocket" />
          <p>Startup</p>
        </div>
      </div>
      <div className="question-answer">
        <p className='question'>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </p>
        <p className='sampleAnswer'>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
      </div>
      {
        windowWidth < 864 ?
          (
            <div className="question-footer">
              <div className="question-tags">
                <div className="question-technology">
                  <p>Design</p>
                  <p>UX</p>
                </div>
                <p className='question-difficulty'>Easy</p>
              </div>
              <div className="answer-tags">
                <div>
                  <img src={message} alt="message" />
                  <p className='numberOfAnswers'>23 Answers</p>
                </div>
                <div className="views">
                  <img src={eye} alt="eye" />
                  <p>100 Views</p>
                </div>
              </div>
            </div>
          ) :
          (
            <div className="question-footer">
              <div className="views">
                <img src={eye} alt="eye" />
                <p>100 Views</p>
              </div>
              <div className="question-info">
                <img src={info} alt="info" />
                <p>How should you word your answer?</p>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Question