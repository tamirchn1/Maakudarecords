import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Music from "./components/Music";
import About from "./components/About";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Music" component={Music} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
