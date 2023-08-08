import React, {createContext, useState} from "react";

export const AppContext = createContext();

export default function AppContextWrapper({children}) {
    const [username, setUsername] = useState('GNITS-User');

    return(
        <AppContext.Provider value={{username, setUsername}}>
            {children}
        </AppContext.Provider>
    )
}