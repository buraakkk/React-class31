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

      <div className="guarantee-container">
        <Guarantee
          img="f-delivery.png"
          title="Free Shipping"
          description="Don't you love it when a company provides great customer service?"
        />
        <Guarantee
          title="100% Money Back"
          img="coin.png"
          description="Don't you love it when a company provides great customer service?"
        />
        <Guarantee
          title="Online support 24/7"
          img="chat.png"
          description="Don't you love it when a company provides great customer service?"
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
