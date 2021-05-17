import React from 'react';
import './ReviewCards.scss';

// Component displaying the customer reviews.
// The component displays the review provided by the customer
// and can be reused multiple times.

const ReviewCards = ({ rev }) => {
  return (
  <>
    <div className="item">
      <div className="review-card">
        <div className="review-content">
          <div className="review-profile">
            <img src={rev.profilepic} alt="" />
            <div className="reviewer-location">
              <p>{rev.reviewer}</p>
              <p className="location-style">
                <img src={rev.locationFlag} alt="" />
                <span>{rev.location}</span>
              </p>
            </div>
          </div>
          <div className="review-description">
            <p>{rev.review}</p>
          </div>
        </div>
      </div>
    </div>
    );
  </>
  );
};

export default ReviewCards;
