import React from 'react';
import classes from './HomeProductDescription.module.css';

function HomeProductDescription() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>DESCRIPTION</div>
      <div className={classes.line} />
      <div className={classes.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur cupiditate aliquam suscipit ut iusto.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus sit impedit obcaecati illum mollitia iusto!
      </div>
    </div>
  );
}

export default HomeProductDescription;
