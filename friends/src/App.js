import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';




function App() {
      return (

            // <Router>
            //   <div className="App">     
            //          <Route exact path="/login" component={Login}/>
            //          <PrivateRoute path="/protected" component={FriendsList}/>
            //   </div>
            // </Router> 

            <Router>
            <div className="App">           
                       
                   <Link to="/login">Login</Link><br/>                 
                   <Link to="/protected">Protected Page</Link>
                        
                 

                  <Switch>
                        <PrivateRoute exact path="/protected" component={FriendsList}/>
                        {/* <Login /> */}
                        {/* <FriendsList /> */}
                        <Route path="/login" component={Login}/>
                        <Route component={Login}/>
                  </Switch>
            </div>
            </Router>



      );
}

export default App;
