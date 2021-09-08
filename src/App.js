import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Login from './pages/login/Login'
import NewsDetails from './components/NewsDetails';
import axios from 'axios';


export const UserContext = createContext();
function App() {
  const email = localStorage.getItem('email')
  const [user, setUser] = useState(email);
  const [admin, setAdmin] = useState(false);
  
  useEffect(() => {
    axios.get(`https://today-flash.herokuapp.com/checkAdmin?email=${user}`)
    .then(res => {
        if(res.data.length > 0){
            setAdmin(true)
        }
    })
  }, [user])

  return (
    <UserContext.Provider value={{user, setUser, admin, setAdmin}}>
      <Toaster/>
      <Router>
        <Switch>
            <PrivateRoute path="/details/:id">
              <NavBar/>
              <NewsDetails/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/login">
              <NavBar/>
              <Login/>
            </Route>
            <Route path="/">
              <NavBar/>
              <Home/>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
