import React from 'react';
import { allInfo } from '../../Components/Info/Info';
import '../../AnimalsCss/Animals.css';


export default function Panther() {
    const CatInfo = allInfo;
    return (
        <div>
            <h1>Welcome </h1>
            <h6>Here you will find information about a Cat</h6>
            <div className="AnimalsImgDiv">
            <img src="https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/4734723/pexels-photo-4734723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/4601871/pexels-photo-4601871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <p>{CatInfo[1]}</p>
       </div>
    )
}