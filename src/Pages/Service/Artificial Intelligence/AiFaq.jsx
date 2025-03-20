import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../Artificial Intelligence/AIFaq.css"; // Import CSS file

const faqs = [
  {
    question: "What AI solutions do you offer?? ",
    answer:
      "We provide AI-powered chatbots, machine learning models, NLP, computer vision, and automation solutions.",
  },
  {
    question: "Can AI be integrated into my existing software?",
    answer:
      "Yes, we can integrate AI functionalities into your current business applications and systems. ",
  },
  {
    question: "Is AI only for large enterprises?",
    answer:
      "No, AI can benefit businesses of all sizes by automating tasks, analyzing data, and enhancing customer experience.",
  },
  {
    question: "How secure are AI-powered solutions? ",
    answer:
      "We follow industry security standards to ensure AI solutions comply with data privacy and security protocols",
  },
  {
    question: "What industries can benefit from AI?",
    answer:
      "AI can enhance healthcare, finance, retail, manufacturing, marketing, and many other industries ",
  },
];


export default function AppFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-box">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="faq-icon" />
            ) : (
              <FiPlus className="faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
