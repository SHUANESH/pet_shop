import React from 'react';
import './Pets.css';
import { UsePetConText } from '../Context/Context';

export default function Pets() {
    const Pets = UsePetConText().animals;
    const thHeder= ["Type" ,"Age", "Quantity" ,"Photo"];
    return (
        <div id="tableDiv">
        
            <table className="table table-hover" >
               <tr>
                   {
                      thHeder.map(Headlines => {
                          return <th>{Headlines}</th>
                      })
                   }
               </tr>
               {
                  Pets.map((item , index) => {
                      return <tr key={index}>
                    {
                        thHeder.map((hadKet) => {
                           return <td>{item[hadKet]}</td>          
                        })
                    }
                </tr>
             
                  }) 
                 
               }
            </table>
           
        </div>
    )
}
