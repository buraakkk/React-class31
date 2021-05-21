import React from "react";
import "./App.css";


import HobbyList from "./Hobbies";
import Guarantee from "./Guarantee";
import Counter from "./Counter";


function App() {
  return (
    <div>
      <div className="App">
        <HobbyList />
      </div>

      <div>
        <Guarantee />
      </div>
      
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
