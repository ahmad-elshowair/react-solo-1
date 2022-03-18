import React from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Info } from "./components/Info";
import { Interests } from "./components/Interests";

const App = ()=> {
  return (<div className="container">
      <div className="card">
          <Info />
          <About />
          <Interests />
          <Footer />
      </div>
  </div>);
}

export default App;
