import React from 'react'
import { person, message, edit, like } from '../../assets'
import "./answer.css"
const Answer = () => {
  return (
    <div className='answer-container'>
      <div className="answer-heading">
        <div className='user-info'>
          <img src={person} alt="person" />
          <div>
            <p className='user-name'>Neha Bhat <span>(You)</span></p>
            <p className='date'>June 27, 2023</p>
          </div>
        </div>
        <div className="edit">
          <img src={edit} alt="edit" />
          <p>Edit</p>
        </div>
      </div>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. <span>Bibendum amet mi.... <strong>Show more</strong></span></p>
      </div>
      <div className="answer-info">
        <div className="like">
          <img src={like} alt="eye" />
          <p>Like</p>
        </div>
        <div className="answer-input">
          <img src={message} alt="message" />
          <input type="text" name="message" id="user-message" placeholder='Add a comment'/>
          <button>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Answer