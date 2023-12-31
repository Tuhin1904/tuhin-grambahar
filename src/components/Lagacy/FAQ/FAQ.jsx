import React, { useState } from 'react';
import './FAQ.css';
import FaqBox from './FaqBox';

function FAQ() {
  const faqs = [
    {
      id: 0,
      question: '1. How is date palm jaggery different from regular jaggery?',
      answer:
        'Date palm jaggery is rich in iron, calcium, and other minerals. It is known to boost energy levels,improve digestion, and strengthen the immune system. It is also believed to have antioxidant properties and can help regulate blood pressure.',
    },
    {
      id: 1,
      question: '2. Is date palm jaggery suitable for people with diabetes?',
      answer: 'This is the process',
    },
    {
      id: 2,
      question: '3. What is the shelf life of date palm jaggery?',
      answer: 'This is the process',
    },
  ];
  const positionInitial = [true, false, false, false];
  const [faqShow, setFaqShow] = useState(positionInitial);

  const handelPlusButton = (id) => {
    const newList = [false, false, false, false];
    if (faqShow[id] === false) {
      newList[id] = true;
    } else {
      newList[id] = false;
    }
    setFaqShow(newList);
  };
  return (
    <div className="faq">
      <div className="faq-title-container">
        <div className="faq-title">FREQUENTLY ASKED QUESTIONS</div>
        <div className="line-faq" />
      </div>
      <div className="quistion-container">
        {faqs.map((faq) => (
          <FaqBox
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            plusButton={handelPlusButton}
            display={faqShow[faq.id]}
          />
        ))}

        {/* <div className="question-div">
          <div className="question">
            <i class="fa-solid fa-q faq-icon"></i>How is date palm jaggery different from regular jaggery?
          </div>
          <div className="question-btn">+</div>
        </div>

        <div className="question-div">
          <div className="question">
            <i class="fa-solid fa-q faq-icon"></i> What are the health benefits of consuming date palm jaggery
          </div>
          <div className="question-btn">-</div>
        </div>
        <div className="answer">
          {faqShow[1] ? (
            <p>
              Date palm jaggery is rich in iron, calcium, and other minerals. It is known to boost energy levels,
              improve digestion, and strengthen the immune system. It is also believed to have antioxidant properties
              and can help regulate blood pressure.
            </p>
          ) : (
            <p>Nothing</p>
          )}
        </div>

        <div className="question-div">
          <div className="question">
            <i class="fa-solid fa-q faq-icon"></i>Is date palm jaggery suitable for people with diabetes?
          </div>
          <div className="question-btn">+</div>
        </div>

        <div className="question-div">
          <div className="question">
            <i class="fa-solid fa-q faq-icon"></i> What is the shelf life of date palm jaggery?
          </div>
          <div className="question-btn">+</div>
        </div> */}
      </div>
    </div>
    // <>
    // a
    // a
    // a

    // </>
  );
}

export default FAQ;
