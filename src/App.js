import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Login from './pages/login/Login'
import NewsDetails from './components/NewsDetails';


export const UserContext = createContext();
function App() {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Toaster/>
      <Router>
        <Switch>
            {/* <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute> */}
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="/details/:id">
              <NewsDetails/>
            </Route>
            <Route path="/login">
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
