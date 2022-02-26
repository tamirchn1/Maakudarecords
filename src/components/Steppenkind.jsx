import React from "react";
import Header from "./Header";
import FooterIndex from "./FooterIndex";
import Iframe from "react-iframe";

function Steppenkind() {
  return (
    <div>
      <Header />
      <div className="stpn-content">
        <div className="about-text">
          <h2>STEPPENKIND</h2>
          <p className="">
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
            <br /> <br />
            They’re constantly trying to perfect their unique sound and being
            autonomous is giving them the space to do so. 2022 is the year of
            the second album „Undefined Lovers“ which is already announcing
            itself here and there on youtube. <br />
            It will finally showcase all the songs that have been making the
            live shows unforgettable.
          </p>
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
      </div>
      <FooterIndex />
    </div>
  );
}
export default Steppenkind;
