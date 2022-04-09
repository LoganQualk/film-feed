import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({
    changePage: () => {}
});

export const GlobalProvider = ({ children }) => {

    const navigate = useNavigate();

    const changePage = async (event, page) => {
        event.preventDefault();
        navigate("/" + page);
    }

    const globalState = {
        changePage
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}