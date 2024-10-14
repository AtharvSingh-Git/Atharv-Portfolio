import React from 'react';
import CurvedArrow from "react-curved-arrow";
import '../styles.css';

const Arrow = () => {
  return (
    <div className="wrapper">
    <div className="from -mt-14 -ml-60" />
    <div className="to -mt-14 -ml-96 mr-32" />
    <CurvedArrow 
        fromSelector=".from" 
        toSelector=".to" 
        middleY={-100}
        color="white"
        />
  </div>
  );
};

export default Arrow;
