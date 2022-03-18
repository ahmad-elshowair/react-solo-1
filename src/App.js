import React from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Interests } from "./components/Interests";

const App = ()=> {
  return (<div className="container">
      <div className="card">
          <Info />
          <About />
          <Interests />
      </div>
  </div>);
}

export default App;
