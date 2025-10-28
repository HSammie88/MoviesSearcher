import { createContext } from "react";
import colors from '../configs/colors.json'

const Context = createContext()

function Wrapper({children}){
    return <Context.Provider value={{colors}}>
        {children}
    </Context.Provider>
}

export {Context, Wrapper}