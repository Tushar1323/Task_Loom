import { createContext, useContext } from "react";

export const Dark = createContext({
    img:"/images/blue.jpg",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const DarkProvider = Dark.Provider

export default function useDark(){
    return useContext(Dark)
}
