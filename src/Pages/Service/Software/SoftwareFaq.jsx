import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../Software/SoftwareFaq.css"; // Import CSS file

const faqs = [
  {
    question: "What types of software solutions do you offer? ",
    answer:
      "We provide web applications, mobile apps, cloud software, enterprise solutions, and API integrations.",
  },
  {
    question: "Can custom software integrate with my existing systems?",
    answer:
      "Yes, we ensure seamless integration with your current tools and platforms.",
  },
  {
    question: " Is custom software development expensive?",
    answer:
      "Our solutions are designed to be cost-effective, offering long-term ROI by increasing efficiency and productivity."
  },
  {
    question: " How secure are your software solutions?",
    answer:
      "We follow industry best practices in data security, encryption, and compliance..",
  },
  {
    question: " What industries do you serve?",
    answer:
      "We cater to healthcare, finance, retail, logistics, education, manufacturing, and more.",
  },
];


export default function SoftwareFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="software-faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="software-faq-box">
          <button className="software-faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="software-faq-icon" />
            ) : (
              <FiPlus className="software-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="software-faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
