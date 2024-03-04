import React, { useState, useEffect } from 'react'
import "./feature.css"
import { closeDesktop, feedbackFeatureDesktop, reportDesktop, contactUsDesktop, suggestionDesktop, feedbackDesktop, closeMobile, feedbackFeatureMobile, reportMobile, feedbackMobile, suggestionMobile, contactUSMobile } from '../../assets'
import Form from '../Form/Form'
const Feature = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [formType, setFormType] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBtnClick = (type) => {
    setFormType(type);
    setActiveButton(!activeButton);
  }

  const handleClick = () => {
    setOpen(!open);
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const buttons = [
    { id: "report", name: "Report an Issue", desktopSource: reportDesktop, mobileSource: reportMobile },
    { id: "feedback", name: "Share Feedback", desktopSource: feedbackDesktop, mobileSource: feedbackMobile },
    { id: "suggestion", name: "Give Suggestion", desktopSource: suggestionDesktop, mobileSource: suggestionMobile },
    { id: "contact", name: "Contact Us", desktopSource: contactUsDesktop, mobileSource: contactUSMobile },
  ]

  return (
    <div className={`feature-container ${activeButton ? 'active' : ''}`}>
      {
        activeButton &&
        <Form type={`${formType}`} onFormSubmit={handleFormSubmit} />
      }
      <div className={`buttons-container ${activeButton ? 'active-form' : ''}`}>
        <div className={`button-container ${activeButton ? 'active-button' : ''}`}>
          {(open || formSubmitted) && buttons.map((button, index) => (
            <div key={index}>
              {!activeButton && <p>{button.name}</p>}
              <button onClick={() => handleBtnClick(button.id)}>
                <img src={windowWidth > 768 ? button.desktopSource : button.mobileSource} alt={button.name} />
              </button>
            </div>
          ))}
        </div>
        <div className="featureButton-container ">
          <button className='featureButton' onClick={handleClick}>
            {
              open ?
                <img src={windowWidth > 768 ? closeDesktop : closeMobile} alt="close" />
                :
                <img src={windowWidth > 768 ? feedbackFeatureDesktop : feedbackFeatureMobile} alt="Feature" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feature
