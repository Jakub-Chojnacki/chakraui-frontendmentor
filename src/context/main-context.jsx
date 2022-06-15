import {createContext,useState} from 'react'
const MainContext = createContext();

export function MainProvider({children}){
    const [showSideNav,setShowSideNav] = useState(true)

    return (
        <MainContext.Provider
         value={{ showSideNav,setShowSideNav }}> 
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;