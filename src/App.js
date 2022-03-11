import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Music from "./components/Music";
import About from "./components/About";
import Sidenav from "./components/Sidenav";
import Steppenkind from "./components/Steppenkind";

function App() {
  return (
    <Router>
      <Sidenav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Music" component={Music} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Steppenkind" component={Steppenkind} />
      </Switch>
    </Router>
  );
}

export default App;
