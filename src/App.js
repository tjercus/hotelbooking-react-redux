import React from "react";
import "./App.css";
import OffersContainer from "./offers/OffersContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hotelbooking with redux</header>
      <article>
        <OffersContainer />
      </article>
    </div>
  );
}

export default App;
