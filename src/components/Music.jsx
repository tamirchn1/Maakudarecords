import React from "react";
import Footer from "./Footer";

function Music() {
  return (
    <div>
      <header className="header">
        <a id="icon" href="/">
          <img
            src="images/MA 1.png"
            alt=""
            className="icon"
            onMouseOver="this.src='images/MA 1Y.png'"
            onMouseLeave="this.src='images/MA 1.png'"
          />
        </a>
      </header>
      <h1>MUSIC</h1>
      <div className="releases">
        <div className="rel-item">
          <a href="/steppenkind" target="_blank">
            <img
              src="images/steppenkind1.jpg"
              className="rel-img"
              alt="album cover of steppenkind first album"
            />
            <p>
              Steppenkind <br />
              undefined Lovers <br />
              2022
            </p>
          </a>
        </div>

        <div className="rel-item">
          <a
            href="https://www.facebook.com/1MLOVE1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/moosh1.jpg"
              className="rel-img"
              alt="album cover of M love first album"
            />
            <p>
              Moosh Lahav <br />
              Flute Ep <br />
              2022
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Music;
