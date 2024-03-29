import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Music() {
  return (
    <div>
      <div className="icon">
        <Header />
      </div>

      <h1>MUSIC</h1>
      <div className="releases">
        <div className="rel-item">
          <a href="/steppenkind">
            <img
              src="images/steppenkind1.jpg"
              className="rel-img"
              alt="album cover of steppenkind first album"
            />
            <p id="stpn-title">
              <span className="artist-name">Steppenkind</span>
              <br />
              undefined Lovers <br />
              2022
            </p>
          </a>
        </div>

        <div className="rel-item">
          <a href="/moosh" target="_blank" rel="noreferrer">
            <img
              src="images/moosh1.jpg"
              className="rel-img"
              alt="album cover of M love first album"
            />
            <p id="moosh-title">
              <span className="artist-name">Moosh Lahav</span> <br />
              Lipari <br />
              2023
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Music;
