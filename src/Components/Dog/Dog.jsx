import React from 'react';
import { allInfo } from '../../Components/Info/Info';
import '../../AnimalsCss/Animals.css';

export default function Dog() {
    const dogInfo = allInfo;
    return (
        <div>
            <h1>Welcome </h1>
            <h6>Here you will find information about a dog</h6>
           <div className="AnimalsImgDiv">
            <img src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img src="https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img src="https://images.pexels.com/photos/540524/pexels-photo-540524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
            <img src="https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
           </div>
           <p>{dogInfo[0]}</p>
        
         </div>
    )
}
