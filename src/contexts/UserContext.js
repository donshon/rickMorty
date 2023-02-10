import {useState, createContext} from 'react'

// 1 create a blank context
export const UserContext = createContext();
// 2 assign value
// 3 provide value to children 
export default function UserContextProvider(props) {
    //create my global state
    const [userName, setUserName] = useState("womp")

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {props.children}
        </UserContext.Provider>
    )
}