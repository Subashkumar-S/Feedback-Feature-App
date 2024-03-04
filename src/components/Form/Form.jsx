import React, { useState } from 'react'
import "./form.css"
import { asterick, attach } from '../../assets'
const Form = ({ type, onFormSubmit }) => {
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

    };
    return (
        <div className='form-container'>
            {submitted && <h3>Thank you for your feedback!</h3>}
            {
                !submitted &&
                <>

                    {type === "report" && <h4>Let us know about the Issue you are facing right now!</h4>}
                    {type === "feedback" && <h4>Let us know your Feedback about us!</h4>}
                    {type === "suggestion" && <h4>Share your Suggestions with us for a chance to earn rewards!</h4>}
                    {type === "contact" && <h4>Let us know what your queries are!</h4>}
                    <form onSubmit={handleSubmit} action="submit">
                        {(type === "report" || type === "suggestion") &&
                            <>
                                <div>
                                    <label htmlFor="section">
                                        Choose a section
                                    </label>
                                    <select name="section" id="sectionName">
                                        <option value="">Select</option>
                                        <option value="conceptCards">Concept Cards</option>
                                        <option value="interViewQuestions">Interview Questions</option>
                                        <option value="practiceQuestions">Practice Questions</option>
                                        <option value="quizzes">Quizzes</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className='text-container'>
                                    <label htmlFor="textArea">Describe the {type === "report" ? "issue" : "suggestion"} in detail: <img src={asterick} alt="star" /></label>
                                    <textarea name="issue" id="issue" cols="30" rows="10" placeholder='Write here ...'>
                                    </textarea>
                                    <button>
                                        <img src={attach} alt="attach" />
                                        Attach
                                    </button>
                                </div>
                                <div className='submitButton'>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                        {type === "feedback" &&
                            <>
                                <div className='text-container'>
                                    <textarea name="issue" id="issue" cols="30" rows="10" placeholder='Write here ...'>
                                    </textarea>
                                    <button>
                                        <img src={attach} alt="attach" />
                                        Attach
                                    </button>
                                </div>
                                <div className='email-container'>
                                    <label htmlFor="email">Enter your email <img src={asterick} alt="star" /></label>
                                    <input type="email" name='email' placeholder='john.doe@gmail.com' />
                                </div>
                                <div className='submitButton'>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                        {
                            type === "contact" &&
                            <>
                                <div className='name-container'>
                                    <label htmlFor="name">Your name: <img src={asterick} alt="star" /></label>
                                    <input type="name" name='name' placeholder='John Doe' />
                                </div>
                                <div className='email-container'>
                                    <label htmlFor="email">Your email <img src={asterick} alt="star" /></label>
                                    <input type="email" name='email' placeholder='john.doe@gmail.com' />
                                </div>
                                <div className='number-container'>
                                    <label htmlFor="number">Your mobile number: <img src={asterick} alt="star" /></label>
                                    <input type="email" name='email' placeholder='john.doe@gmail.com' />
                                </div>
                                <div className='text-container'>
                                    <label htmlFor="textArea">What would you like to ask?  <img src={asterick} alt="star" /></label>
                                    <textarea name="issue" id="issue" cols="30" rows="10" placeholder='Write here ...'>
                                    </textarea>
                                </div>
                                <div className='submitButton'>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    </form>
                </>
            }
        </div>
    )
}

export default Form