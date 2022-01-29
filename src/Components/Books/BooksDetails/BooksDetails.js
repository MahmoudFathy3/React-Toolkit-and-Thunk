import React from 'react';

const BooksDetails = ({DarkTheme}) => {
  // style={{color: DarkTheme.Color}}
  return (
  <div className="BooksDetails">  
    <h2 >Books Details</h2>
    <div className="Details">
      <p>There is no book selected yet. Please select</p>
    </div>
  </div>
  )
};

export default BooksDetails;
