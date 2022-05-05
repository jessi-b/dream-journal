import React from "react";
import JournalControl from "./JournalControl";
import Header from "./Header";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin"><Signin /></Route> 
        <Route path="/"><JournalControl /></Route>
      </Switch>
    </Router>
  );
}

export default App;