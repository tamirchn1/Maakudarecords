import React from "react";

var d = new Date().getFullYear();

function FooterIndex() {
  return (
    <div>
      <div className="logos-index">
        <a
          href="https://www.instagram.com/maakuda_records/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.facebook.com/Maakuda-103079015494052"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-2x fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fa fa-bandcamp fa-2x" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fab fa-soundcloud fa-2x" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fab fa-youtube fa-2x" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fas fa-record-vinyl fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <footer className="copyright">
        This website was built by -{" "}
        <a className="tamir" href="mailto:Tamirchn1@gmail.com">
          Tamir Chen
        </a>{" "}
        <br />
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>
        {d} MAAKUDA RECORDS All Rights Reserved
      </footer>
    </div>
  );
}

export default FooterIndex;
