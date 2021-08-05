import React from 'react'
import './assets/css/base/base.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from "./pages/Page404"
import Post from "./pages/Post"
import Header from "./components/Header"
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
      <Header />
      <Switch>  
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App
