import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type Context = {
    title : string;
};

const themeContext = createContext<Context>(
    {
        title: "",
    }
)

export const ThemeProvider : ParentComponent = (props) => {
     const [state, setState] = createStore({
        title : props.title ?? title
     })
    return (
        <themeContext.Provider value={}>
            {props.children}
        </themeContext.Provider>
    )
};

export const useTheme = () => useContext<Context>(themeContext);