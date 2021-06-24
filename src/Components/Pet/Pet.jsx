import React from 'react';
import Pets from '../Pets/Pets';
import { UsePetConText } from '../../Components/Context/Context'

export default function Pet() {
    const pet = UsePetConText().animals;

    return (
        <div>
            <Pets/>
        </div>
    )
}
