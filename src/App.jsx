import React from 'react'
import './assets/css/base/base.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
  <>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
    </Router>
  </>
  )
}

export default App
