import React from 'react';
import classes from './AllReviews.module.css';
import Review from './Review';

function AllReviews() {
  const reviews = [
    {
      id: 1,
      userName: 'Pratim Ghosh',
      date: '27/09/2023',
      rating: 5,
      title: 'Excellent product',
      prodReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ratione.',
    },
    {
      id: 1,
      userName: 'Pratim Ghosh',
      date: '27/09/2023',
      rating: 5,
      title: 'Excellent product',
      prodReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ratione.',
    },
    {
      id: 1,
      userName: 'Pratim Ghosh',
      date: '27/09/2023',
      rating: 5,
      title: 'Excellent product',
      prodReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ratione.',
    },
    {
      id: 1,
      userName: 'Pratim Ghosh',
      date: '27/09/2023',
      rating: 5,
      title: 'Excellent product',
      prodReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ratione.',
    },
  ];
  return (
    <div className={classes.all_review_container}>
      <div className={classes.customer_review}>Customer Reviews</div>
      <div className={classes.write_a_review}>Write a review</div>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default AllReviews;
