import { createContext, ReactNode, useState } from "react";

type ThemeType = "light" | "dark";
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null >({
    theme: "light",
    toggleTheme: () => {},
})

const ThemeProvider = ({children}: {children:ReactNode}) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    );
};
 function UseContext() {
  return (
    <ThemeProvider>
        <div>Hello Tushar how are you </div>
    </ThemeProvider>
  )
}
export default UseContext;