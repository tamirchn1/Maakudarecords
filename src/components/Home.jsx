import React from "react";
import FooterIndex from "./FooterIndex";

function Home() {
  return (
    <div className="app">
      <main>
        <a href="/">
          <img src="images/MA 1.png" alt="Maakuda logo" className="logo" />
        </a>
        <h1>MAAKUDA RECORDS</h1>
        <FooterIndex />
      </main>
    </div>
  );
}

export default Home;
