import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProductUpload from '../pages/ProductUpload';
import './Navigation.css';

function Navigation() {
    return (
        <Router>
            <div className='navigation'>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to='/dashboard' className='navlink'>
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link to='/login' className='navlink'>
                                Admin
                            </Link>
                        </li>
                        <li>
                            <Link to='/productUpload' className='navlink'>
                                Data Upload
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/dashboard'>
                        {/* <Items/> */}
                        <Dashboard />
                    </Route>
                    <Route path='/login'>
                        {/* <Items/> */}
                        <Login />
                    </Route>
                    <Route path='/productUpload'>
                        {/* <Items/> */}
                        <ProductUpload />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navigation;
