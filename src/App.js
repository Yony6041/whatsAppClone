import React, {useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from './Chat';
import {
  Switch, Route, BrowserRouter as Router
} from "react-router-dom";
import Login from "./Login";
import { useStateValue, dispatch } from "./StateProvider";

// {/* <Chat/> */}

function App() {
  const [{user}, dispatch] = useStateValue(null);
  return (
    // BEM naming convention 
    <div className="app"> 
    {!user? (
      <Login/>
    ) : (
      <div className="app__body">
        <Router>
          <Sidebar/>


          <Switch>
            <Route path="/rooms/:roomId"> 
              < Chat />
            </Route>
            <Route path="/"> 
              <Chat/>              
            </Route>
          </Switch>
        </Router>
      </div>
    )}
      
    </div>
  );
}

export default App;
