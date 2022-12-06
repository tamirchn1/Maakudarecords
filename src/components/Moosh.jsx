import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Iframe from "react-iframe";
import Sidenav from "./Sidenav";

function Moosh() {
  return (
    <div>
      <Sidenav />
      <div className="icon">
        <Header />
      </div>
      <main>
        <h1 className="about-head">Moosh</h1>
        <div className="artist-content">
          <p className="artist-text">Moosh Lahav is...</p>
          <div className="artist-media">
            <img
              src="images/moosh1.jpg"
              className="rel-img"
              alt="album cover of M love first album"
            />
            <Iframe
              style="border: 0; width: 100%; height: 42px;"
              src="https://bandcamp.com/EmbeddedPlayer/album=984601880/size=small/bgcol=333333/linkcol=e99708/transparent=true/"
              seamless
            >
              <a href="https://oberwave.bandcamp.com/album/m-love-atme-aus">
                M Love – Atme Aus by Oberwave Records
              </a>
            </Iframe>
          </div>
        </div>
        <form>
          <div>
            <a className="form" href="mailto:Maakudarecords@gmail.com">
              Contact <span className="bold">||</span>{" "}
              <span className="label-name">MAAKUDA RECORDS</span>
            </a>
          </div>
        </form>
        <Footer />
      </main>
    </div>
  );
}
export default Moosh;
