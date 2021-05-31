import React from "react";
import { Counter } from "./features/counter/Counter";
import About from "./features/about/About";
import Playlist from "./features/playlist/Playlist";
import Logo from "./features/logo/Logo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/playlist">Playlist</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Logo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Counter />
//         <About />
//         <Playlist />
//         <Logo />
//       </header>
//     </div>
//   );
// }

export default App;
