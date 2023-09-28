/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function FaqBox({ id, question, answer, plusButton, display }) {
  return (
    <>
      <div className="question-div">
        <div className="question">
          <i className="fa-solid fa-q faq-icon" />
          {question}
        </div>
        <div className="question-btn" onClick={() => plusButton(id)}>
          {display ? '-' : '+'}
        </div>
      </div>
      <div className="answer">{display ? answer : <></>}</div>
    </>
  );
}

export default FaqBox;
