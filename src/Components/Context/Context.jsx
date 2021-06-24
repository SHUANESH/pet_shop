import { createContext,useContext} from 'react';

export const PetConText = createContext([]);
export const PetConTextProvider = PetConText.Provider;

export function UsePetConText(){
    return useContext(PetConText);
}