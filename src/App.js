import React,{useState} from 'react';
import Routing from './Components/Routing/Routing';
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import { PetConTextProvider } from './Components/Context/Context'
import './App.css';
const animalsFirstStet = [
  {Type:"dog",Age:5 , Quantity:20 ,Photo:<img className="imgFromApp" src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>},
  {Type:"tiger",Age:10 , Quantity:5 , Photo: <img className="imgFromApp" src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />},
  {Type:"cat",Age:2 , Quantity:15 , Photo: <img className="imgFromApp" src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />},
  {Type:"lion",Age:10 , Quantity:4 , Photo: <img className="imgFromApp" src= "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />},
  {Type:"panther",Age:6 , Quantity:12,Photo: <img className="imgFromApp" src="https://images.pexels.com/photos/4577775/pexels-photo-4577775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
]

function App() {
  const [animals , setAnimals] = useState(animalsFirstStet);
  return (
    <div className="App">
      <PetConTextProvider value={{animals ,setAnimals }}>
         <Router>
            <Routing/>
        </Router>
      </PetConTextProvider>
    </div>
  );
}

export default App;
