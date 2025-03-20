import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../Digital/Digital.css"; // Import CSS file

const faqs = [
  {
    question: "What digital marketing services do you offer? ",
    answer:
      "We provide SEO, social media marketing, PPC advertising, content marketing, and email marketing. ",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Organic strategies take 3-6 months, while paid advertising can show immediate results. ",
  },
  {
    question: "Do you provide social media management?",
    answer:
      "Yes, we create and manage social media campaigns on Facebook, Instagram, LinkedIn, and more. .",
  },
  {
    question: "What is PPC advertising, and how does it work?",
    answer:
      "PPC (Pay-Per-Click) ads, like Google Ads, help businesses gain instant traffic by paying for clicks. .",
  },
  {
    question: "Do you provide analytics and reports for marketing campaigns?",
    answer:
      "Yes, we provide performance reports, conversion tracking, and optimization recommendations.",
  },
];


export default function DigitalFaq() {
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
