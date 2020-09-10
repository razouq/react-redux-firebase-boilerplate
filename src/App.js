import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/page/Home";
import CreateEntity from "./components/entity/CreateEntity";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create-entity">
            <CreateEntity></CreateEntity>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export default App;
