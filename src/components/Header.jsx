function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="images/MA 1.png"
          alt=""
          className="icon"
          onMouseOver="this.src='images/MA 1Y.png'"
          onMouseLeave="this.src='images/MA 1.png'"
        />
      </a>
    </header>
  );
}
export default Header;
