import Hobbies from "./Hobbies";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      <h2>All Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <Hobbies key={index} element={hobby} />
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
