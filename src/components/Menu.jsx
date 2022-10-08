import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import img1 from '../assets/threeLines.png';
import img2 from '../assets/x.png';
import Home from '../pages/Home';
import Login from '../pages/Login';

import './Menu.css'


function Menu() {
    const [open, setOpen] = useState(false)
    const [menuImg, setMenuImg] = useState(img1)
  
    const handleClick = () => {
        setOpen(!open);
        if (open) {
            setMenuImg(img2);
        }
        else {
            setMenuImg(img1);
        }
    }

    return (
        <Router>
        <div>
        <img className="menu_button" src={menuImg} alt="Hamburger Menu Icon" onClick={handleClick()}/>
        <nav>  
            <ul className="navigation">
                <li>
                <Link to="/home" className="navlink">Home</Link>
                </li>
                <li>
                <Link to="/login" className="navlink">Admin</Link>
                </li>
            </ul>
        </nav>
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
    </Switch>
    </div>
  </Router>

    )
}

export default Menu;