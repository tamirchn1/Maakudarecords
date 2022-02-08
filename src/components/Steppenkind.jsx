import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Iframe from "react-iframe";

function Steppenkind() {
  return (
    <div>
      <Header />
      <div className="about-text">
        <h2>STEPPENKIND</h2>
        <p>Steppenkind are our friends, we met them in a party</p>
      </div>

      <Iframe
        style="border: 0; width: 365px; height: 700px;"
        src="https://bandcamp.com/EmbeddedPlayer/album=636602623/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
        seamless
      >
        <a href="https://steppenkind.bandcamp.com/album/walk-along-your-river">
          Walk Along Your River by Steppenkind
        </a>
      </Iframe>
      <Footer />
    </div>
  );
}
export default Steppenkind;
