import React, { useState } from "react";

function Button({ addOne }) {
  return <button onClick={addOne}>Add 1!</button>;
}
function Count({ count }) {
  return <div>{count}</div>;
}
function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  

  return (
    <div>
      <Count count={count} />
      <p>{feedback}</p>
      <Button oneAdd = {() => setCount(count + 1)} />
    </div>
  );
}

export default Counter;
