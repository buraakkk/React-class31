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
  const title = "My Hobby List";
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  //Hobby(key,hobby) ?
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        {hobbies.map((hobby, index) => {
          return <Hobby key={index} hobby={hobby} />;
        })}
      </div>
    </div>
  );
}

export default HobbyList;
