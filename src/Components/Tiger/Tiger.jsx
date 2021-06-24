import React from 'react';
import { allInfo } from '../../Components/Info/Info';
import '../../AnimalsCss/Animals.css';

export default function Panther() {
    const TigerInfo = allInfo;
    return (
        <div>
            <h1>Welcome </h1>
            <h6>Here you will find information about a Tiger</h6>
            <div className="AnimalsImgDiv">
            <img src="https://images.pexels.com/photos/145899/pexels-photo-145899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/3777200/pexels-photo-3777200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/3860030/pexels-photo-3860030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>

            <p>{TigerInfo[2]}</p>
       </div>
    )
}