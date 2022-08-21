import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Questions from "./components/Questions";
import Tables from "./components/Tables";
import Dashboard from "./components/Dashboard";
import NotificationPage from "./components/notificationPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/ashewaquestion"}>
          <Login />
        </Route>
        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/dashboard"}>
          <Nav />
          <Dashboard />
        </Route>
        <Route exact path={"/questions"}>
          <Nav />
          <Questions />
        </Route>
        <Route exact path={"/tables"}>
          <Nav />
          <Tables />
        </Route>
        <Route exact path={"/notificationPage"}>
        <Nav />
        <NotificationPage/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
