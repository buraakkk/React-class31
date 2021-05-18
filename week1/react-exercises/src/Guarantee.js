import React from "react";

function Guarantee({img, title, description }) {
    
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default Guarantee;
