import React from "react";

function Home() {
  return (
    <div>
      <main>
        <a href="/">
          <img src="images/MA 1.png" alt="Maakuda logo" className="logo" />
        </a>
        <h1>MAAKUDA RECORDS</h1>
        <footer>
          <p className="copyright">
            This website was built by
            <a className="tamir" href="mailto:Tamirchn1@gmail.com">
              Tamir Chen
            </a>
            <br />
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script>
            MAAKUDA RECORDS All Rights Reserved
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
