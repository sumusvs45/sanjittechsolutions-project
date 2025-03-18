import React from 'react';
import '../Review box/Review.css';
import { motion } from 'framer-motion';

const Review = () => {
  const reviews = [
    [
      { name: "Alice Johnson", image: "/images/review1.jpg" },
      { name: "Bob Smith", image: "/images/review2.jpg" },
      { name: "Emily Davis", image: "/images/review3.jpg" },
    ],
    [
      { name: "Michael Brown", image: "/images/review4.jpg" },
      { name: "Sarah Lee", image: "/images/review5.jpg" },
      { name: "James Wilson", image: "/images/review6.jpg" },
    ],
    [
      { name: "Linda Taylor", image: "/images/review7.jpg" },
      { name: "David Harris", image: "/images/review8.jpg" },
      { name: "Sophia Clark", image: "/images/review9.jpg" },
    ],
  ];

  return (
    <>
      <div className="review-container">
        <div className="review-header">
          <div className="review-border"></div>
          <h2>Voice of Trust & Success</h2>
        </div>
        <div className="review-box">
    <div className="testimonials">
      <div className="reviews-container">
        {reviews.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="review-column"
            animate={{ y: [rowIndex % 2 === 0 ? 100 : -100, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
              repeatType: "mirror"
            }}
          >
            {row.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-content">
                  <img src={review.image} alt={review.name} className="review-image" />
                  <div>
                    <h4>{review.name}</h4>
                    <p>⭐⭐⭐⭐☆</p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
    </div>
      </div>
    </>
  );
};

export default Review;
