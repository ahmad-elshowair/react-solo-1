import React from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";

const App = ()=> {
  return (<div className="container">
      <div className="card">
          <Info />
          <About />
      </div>
  </div>);
}

export default App;
