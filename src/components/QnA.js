import React from 'react';
import '../styles/QnA.css';

function QnA() {
  const questions = [
    { question: 'What is Embroidreams?', answer: 'We provide premium embroidery services to bring your ideas to life.' },
    { question: 'How can I place an order?', answer: 'Simply contact us through our Contact Us page or email us directly.' },
    { question: 'What is your turnaround time?', answer: 'Typically, orders are completed within 7-10 business days.' },
  ];

  return (
    <div className="qna">
      <h2>FAQs</h2>
      {questions.map((item, index) => (
        <div key={index} className="qna-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default QnA;
