import React from 'react';
import './App.css';
import Dashboard from "./dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./landingPage/Login";
import SignUp from "./landingPage/SignUp";
import ShowInfo from "./showInfo/ShowInfo";

function isAuthenticated()  {
    return true
}
function PrivateRoute(props) {
    return isAuthenticated() && (<Route>
        {props.children}
    </Route>)
}
function PublicRoute(props) {
    return !isAuthenticated() && (<Route>
        {props.children}
    </Route>)
}

function App() {
  return (
    <div className="App">
        <Router>
            <PrivateRoute>
            <Switch>
                <Route exact path='/'>
                    <Dashboard/>
                </Route>
                <Route path='/show/:id'>
                    <ShowInfo />
                </Route>
                <Redirect to={{pathname: "/"}}/>
            </Switch>
            </PrivateRoute>
            <PublicRoute>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/signup'>
                    <SignUp/>
                </Route>
                <Redirect to={{ pathname:"/login"}}/>
            </PublicRoute>
        </Router>
    </div>
  );
}

export default App;
