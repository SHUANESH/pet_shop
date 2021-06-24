import React from 'react';
import { allInfo } from '../../Components/Info/Info';
import '../../AnimalsCss/Animals.css';

export default function Panther() {
    const lionInfo = allInfo;
    return (
        <div>
            <h1>Welcome </h1>
            <h6>Here you will find information about a Lion</h6>
            <div className="AnimalsImgDiv">
            <img src="https://images.pexels.com/photos/3284299/pexels-photo-3284299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/6056021/pexels-photo-6056021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/6436445/pexels-photo-6436445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/6477379/pexels-photo-6477379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""  />
            <img src="https://images.pexels.com/photos/6056019/pexels-photo-6056019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>

            <p>{lionInfo[3]}</p>
       </div>
    )
}