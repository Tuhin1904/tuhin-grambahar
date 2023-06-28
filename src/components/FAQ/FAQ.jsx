import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-title-container">
        <div className="faq-title">FREQUENTLY ASKED QUESTIONS</div>
        <div className="line-faq"></div>
      </div>
      <div className="quistion-container">
        <div className="question-div">
           <div className="question">
           <i class="fa-solid fa-q faq-icon"></i>How is date palm jaggery different from regular jaggery?
           </div>
           <div className="question-btn">
            +
           </div>
        </div>

        <div className="question-div">
           <div className="question">
           <i class="fa-solid fa-q faq-icon"></i>  What are the health benefits of consuming date palm jaggery
           </div>
           <div className="question-btn">
            -
           </div>
        </div>
        <div className="answer">
        Date palm jaggery is rich in iron, calcium, and other minerals. It is known to boost energy levels, improve digestion, and strengthen the immune system. It is also believed to have antioxidant properties and can help regulate blood pressure.
        </div>

        <div className="question-div">
           <div className="question">
           <i class="fa-solid fa-q faq-icon"></i>Is date palm jaggery suitable for people with diabetes?
           </div>
           <div className="question-btn">
            +
           </div>
        </div>

        <div className="question-div">
           <div className="question">
           <i class="fa-solid fa-q faq-icon"></i> What is the shelf life of date palm jaggery?
           </div>
           <div className="question-btn">
            +
           </div>
        </div>

      </div>
      <div className="extra"></div>
    </div>
  );
};

export default FAQ;
