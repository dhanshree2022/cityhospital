import { createContext, useReducer } from "react"
import { themeReducer } from "./reducer/theme.reducer";
import { TOOGLE_THEME } from "./ActionTypes";


const initState = {
    theme:'light'
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [state,dispatch] = useReducer(themeReducer,initState);

    const toogleTheme = (val)=>{
        const newtheme = val === 'light' ? 'dark' : 'light';
        dispatch({type:TOOGLE_THEME, payload:newtheme})
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                toogleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;