import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import history from "./History";
import MainPage from "./pages/MainPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
