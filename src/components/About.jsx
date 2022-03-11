import React from "react";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import Header from "./Header";

function About() {
  return (
    <div>
      <Sidenav />
      <div className="icon">
        <Header />
      </div>
      <main>
        <h1 className="about-head">About</h1>
        <div className="about-content">
          <p className="about-text">
            <span className="label-name"> 'MAAKUDA RECORDS'</span> was born on
            the ruins of the "Solarium" underground party series that operated
            from 2015 till 2020. During this sequence, unique talents from all
            over the scale came to Berlin to provide a unique cultural
            experience. <br />
            <br />
            Punk and kraut rock, multi-layered dance music and flute melodies in
            a time machine from the seventies The character and uniqueness of
            the establishment lies in the variety and ability to find language
            and a bridge between all those in which there is a spark, all of us.
            <br />
            <br />
            Documentation of the multiplicity of thoughts, expressions and
            emotions that takes place during this interesting period in which we
            exist.
            <br />
            And there is room for everyone. This soundtrack that plays in our
            ears, which we want to share to the world, soft pointy kisses that
            writes the madness and contradiction.
          </p>
          <img src="https://picsum.photos/400/300" />
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

export default About;
