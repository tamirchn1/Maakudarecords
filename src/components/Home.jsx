import React from "react";
import FooterIndex from "./FooterIndex";
import Lottie from "./Lottie";

function Home() {
  return (
    <div className="app-index">
      <main>
        <div className="lottie">
          <Lottie />
        </div>

        <h1 className="home-h1">MAAKUDA RECORDS</h1>
        <FooterIndex />
      </main>
    </div>
  );
}

export default Home;
