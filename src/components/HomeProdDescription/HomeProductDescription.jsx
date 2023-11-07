import React from 'react';
import classes from './HomeProductDescription.module.css';

function HomeProductDescription({ productDescription = '' }) {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>DESCRIPTION</div>
      <div className={classes.line} />
      <div className={classes.description} dangerouslySetInnerHTML={{ __html: productDescription }} />
    </div>
  );
}

export default HomeProductDescription;
