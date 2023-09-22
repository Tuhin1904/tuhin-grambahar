import React from 'react';

const FaqBox = ({id,question,answer,plus_button,display}) => {

  return (
    <>
    <div className="question-div">
          <div className="question">
            <i class="fa-solid fa-q faq-icon"></i>{question}
          </div>
          <div className="question-btn" onClick={()=>plus_button(id)}>{display?"-":"+"}</div>
        </div>
        <div className="answer">
          {display ? (
            answer
          ) : (
           <></>
          )}
        </div>
        </>
  );
};

export default FaqBox;
