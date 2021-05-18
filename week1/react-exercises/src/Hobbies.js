import React from "react";

function Hobby({ hobby }) {
  //Is it a functional component  ?
  return (
    <>
      <li>{hobby}</li>
    </>
  );
}

function HobbyList() {
  const title = "My Hobby List" ;
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        {hobbies.map((hobby, index) => {
          return <Hobby key={index} hobby={hobby} />; // Is that line same with Hobby(hobby) ?
        })}
      </div>
    </div>
  );
}

export default HobbyList;
