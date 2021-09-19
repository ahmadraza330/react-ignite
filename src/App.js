import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GLobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <GLobalStyles />
      <Route path={["/game/:id", "/"]} exact component={Home} />
    </Router>
  );
}

export default App;
