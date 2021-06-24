import React from 'react';
import './NavBar.css'
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
 export default function NavBar(){

    return(
        < >
          <Link className="link" to="/">
            Home
          </Link>

         <Link className="link" to="/Dog">
          Dog
         </Link>

          <Link className="link" to="/Cat">
          Cat
          </Link>

          <Link className="link" to="/Lion">
          Lion
          </Link>
          <Link className="link" to="/Tiger">
          Tiger
          </Link>
          <Link className="link" to="/Panther">
          Panther
          </Link>
          <Link className="link" to="/Table">
          Table
          </Link>
          
        </>
    )
 }