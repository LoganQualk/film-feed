import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalState from "../hooks/useLocalState";
import listData from "../tempData/lists";
import logData from "../tempData/logs";
import postData from "../tempData/posts";

export const GlobalContext = createContext({
    changePage: () => {},
    posts: [], lists: [], logs: [],
    setPosts: () => {}, setLists: () => {}, setLogs: () => {},
});

export const GlobalProvider = ({ children }) => {

    // // the setters will now set things in local storage, and get from the local storage
    const [posts, setPosts] = useLocalState("posts", postData);
    const [lists, setLists] = useLocalState("lists", listData);
    const [logs, setLogs] = useLocalState("logs", logData);

    const navigate = useNavigate();

    const changePage = async (page, data) => { //data parameter is optional
        navigate("/" + page, {state: data});
    }

    const globalState = {
        changePage,
        posts, setPosts,
        lists, setLists,
        logs, setLogs
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}