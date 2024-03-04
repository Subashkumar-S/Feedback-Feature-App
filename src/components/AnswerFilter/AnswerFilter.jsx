import React from 'react'
import "./answerFilter.css"
const AnswerFilter = () => {
  return (
    <div className='answer-fiter-container'>
        <p>Answers(23)</p>
        <div className="answerFilter">
            <p>Sort By:</p>
            <select name="category" id="answerCategory">
                <option value="popular">Popular</option>
                <option value="complexity">Complexity</option>
                <option value="industryType">Industry Type</option>
                <option value="companyType">Company Type</option>
            </select>
        </div>  
    </div>
  )
}

export default AnswerFilter