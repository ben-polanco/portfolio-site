//experience_card.js
import React from 'react';

const Experience_Card = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `    
    <div className="content-card" id="content-card">
    <!-- Content goes here --> 
    <h3>Building 1</h3>
    <p>This is where the tagline for the first building goes</p>
    </div>
` }} />
  );
};

export default Experience_Card;