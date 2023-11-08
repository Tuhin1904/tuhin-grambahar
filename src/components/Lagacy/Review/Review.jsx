import React from 'react';
import { Icon } from '@iconify/react';
import classes from './Review.module.css';

function Review(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { userName, date, rating, title, prodReview } = props.review;
  return (
    <div className={classes.review_container}>
      <div className={classes.top_card}>
        <div className={classes.left_side_container}>
          <div className={classes.avatar_container} />
        </div>
        <div className={classes.right_side_container}>
          <div className={classes.star}>
            {/* eslint-disable-next-line no-unused-vars */}
            {[...Array(rating)].map((x, i) => (
              <Icon
                icon="basil:star-solid"
                style={{ display: 'inline', color: 'rgb(255, 150, 3)', fontSize: '20px' }}
              />
            ))}
            <div className={classes.date}>{date}</div>
          </div>
          <div className={classes.verified}>Verified</div>
          <div className={classes.name}>{userName}</div>
        </div>
      </div>
      <div className={classes.bottom_container}>
        <div className={classes.title}>{title}</div>
        <div className={classes.prod_review}>{prodReview}</div>
      </div>
      <hr />
    </div>
  );
}

export default Review;
