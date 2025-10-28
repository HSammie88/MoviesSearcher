import { createContext, useState } from "react";
import colors from '../configs/colors.json'

const Context = createContext()

function Wrapper({children}){
    const [movieName, setMovieName] = useState(null)
    return <Context.Provider value={{colors, setMovieName, movieName}}>
        {children}
    </Context.Provider>
}

export {Context, Wrapper}