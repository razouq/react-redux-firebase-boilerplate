import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/page/Home';
import CreateEntity from './components/entity/CreateEntity';
import ListEntities from './components/entity/ListEntities';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import { Container } from '@elements/app';
import EditEntity from './components/entity/EditEntity';

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-entity" component={CreateEntity} />
          <Route path="/edit-entity/:entityId" component={EditEntity} />
          <Route path="/list-entities" component={ListEntities} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
