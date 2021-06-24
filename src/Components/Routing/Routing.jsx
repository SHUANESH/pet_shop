import React from 'react';
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Pets from '../Pets/Pets';
import Home from '../Home/Home';
import Dog from '../Dog/Dog';
import Cat from '../Cat/Cat';
import Lion from '../Lion/Lion';
import Panther from '../Panther/Panther';
import Tiger from '../Tiger/Tiger';






export default function Routing() {
    return (
        <>
        <NavBar/>
        <Switch>
  
         <Route exact path="/">
            <Home/>
         </Route>

         <Route path="/Dog">
            <Dog/>
         </Route>

         <Route path="/Cat">
             <Cat/>
         </Route>
           
         <Route exact path="/Lion">
            <Lion/>
         </Route>

         <Route path="/Tiger">
            <Tiger/>
         </Route>

         <Route path="/Panther">
             <Panther/>
         </Route>

         <Route path="/Table">
             <Pets/>
         </Route>
         
        </Switch>
        </>
    )
}