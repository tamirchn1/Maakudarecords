import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Iframe from "react-iframe";
import Sidenav from "./Sidenav";

function Steppenkind() {
  return (
    <div>
      <Sidenav />
      <div className="icon">
        <Header />
      </div>
      <main>
        <h1 className="about-head">STEPPENKIND</h1>
        <div className="artist-content">
          <p className="artist-text">
            Steppenkind is building a bridge between nightclubbing and live
            concerts. <br /> The Berlin Trio is merging a variety of genres with
            synthesizers, electronic and acoustic drums, mesmerizing electric
            guitars and distinct spoken word on top, all performed live.
            <br />
            <br /> They can be soft, psychedelic and emotional with warm
            bass-drones, echoes and jazzy drums, but it can also fully escalate
            into Berlin-techno infused raves and improvised krautrock. <br />
            The lyrics are delivered with an immersive stage presence by Irish
            native Brendan Cleary, who came to Berlin as a writer and found his
            way into making music.
            <br />
            <br /> Live drums as well as uncountable sequencers, arpeggiators
            and cables are handled by the amazing chemistry between Hotte Schulz
            and Can Winter, who craft the sounds like scientists in a lab who
            lost their minds.
            <br />
            <br /> Early 2018, they released their 7-track debut album „Walk
            Along Your River“. Since then the band has been playing consistently
            in clubs in and out of Berlin almost every month.
            <br /> They’ve also been playing at underground and overground
            festivals such as Fusion, Wyspa, Solarium, Funkloch, Sublet
            (Jerusalem) and many more. <br />
            All their Recordings are self-produced and recorded in their own
            studio in Berlin.
            <br /> <br /> They’re constantly trying to perfect their unique
            sound and being autonomous is giving them the space to do so. 2022
            is the year of the second album „Undefined Lovers“ which is already
            announcing itself here and there on youtube. <br />
            It will finally showcase all the songs that have been making the
            live shows unforgettable.
          </p>
          <div className="artist-media">
            <img
              className="band-photo"
              src="images/steppenkind2.jpg"
              alt="band photo"
            />
            <Iframe
              style="border: 0; width: 100%; height: 100%;"
              src="https://bandcamp.com/EmbeddedPlayer/album=301964245/size=small/bgcol=333333/linkcol=e99708/transparent=true/"
              seamless
            >
              <a href="https://steppenkind.bandcamp.com/album/undefined-lovers">
                Undefined Lovers by Steppenkind
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
export default Steppenkind;
