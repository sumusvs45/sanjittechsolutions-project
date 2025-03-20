import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../DataScience/DataScience.css"; // Import CSS file

const faqs = [
  {
    question: "What is data science, and how can it help my business ",
    answer:
      "Data science helps businesses analyze large data sets to uncover trends, predict customer behavior, make data-driven decisions",
  },
  {
    question: "What types of data analytics do you offer? ",
    answer:
      "We provide predictive analytics, real-time data processing, big data analysis, and AI-driven insights.",
  },
  {
    question: "Can you work with my existing business data? ",
    answer:
      "Yes, we analyze structured and unstructured data from various sources to provide actionable insights.",
  },
  {
    question: "What industries benefit from data science",
    answer:
      "Data science is used in finance, healthcare, retail, marketing, logistics, and many other sectors.",
  },
 
];


export default function DataScienceFaq() {
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
