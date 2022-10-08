import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductUpload from '../pages/ProductUpload';
import QuizPage from '../pages/QuizPage';
import './Navigation.css'

function Navigation() {
  return (
      <Router>
        <div>
          <nav className="navbar">
            <ul>
            <li>
            <Link to="/home" className="navlink">Home</Link>
            </li>

            <li>
            <Link to="/login" className="navlink">Admin</Link>
            </li>
            <li>
            <Link to="/productUpload" className="navlink">Data Upload</Link>
            </li>
            <li>
            <Link to="/quizPage" className="navlink">Quiz Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/home">
                {/* <Items/> */}
                <Home />
            </Route>
            <Route path="/login">
                {/* <Items/> */}
                <Login />
            </Route>
            <Route path="/productUpload">
                {/* <Items/> */}
                <ProductUpload />
            </Route>
            <Route path="/quizPage">
                {/* <Items/> */}
                <QuizPage />
            </Route>
        </Switch>
        </div>
      </Router>
  )
}

export default Navigation