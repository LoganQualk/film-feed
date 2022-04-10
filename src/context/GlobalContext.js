import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({
    changePage: () => { }
});

export const GlobalProvider = ({ children }) => {

    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalPage, setModalPage] = useState(null);
    // const [modalData, setModalData] = useState(null);

    const changePage = async (page, data) => { //data parameter is optional
        navigate("/" + page, { state: data });
    }

    const globalState = {
        changePage,
        modalVisible, setModalVisible,
        modalPage, setModalPage,
        isLoaded, setIsLoaded
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}