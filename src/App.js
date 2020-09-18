import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* if you put a component outside the switch this will be fixes for all the routes */}

      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* Tinder card */
}
{
  /* Buttons below card */
}

{
  /* Chats screen */
}
{
  /* individual chat screen */
}
{
  /* always put the home at athe bottom "/" because when it find the slash it will stop the route */
}
