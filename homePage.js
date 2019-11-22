import React from "react";
import Navbar from "./navbar";

function homePage() {
  return (
    <>
      <body>
        <Navbar />
        <div className="Header">
          <h1>DJ Zaragoza</h1>
        </div>
        <div className="title">
          <h3>Software Developer</h3>
        </div>
      </body>
    </>
  );
}

export default homePage;
