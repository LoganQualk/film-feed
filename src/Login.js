import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

const Login = () => {

    const {changePage} = useContext(GlobalContext);

    return (
        <div className="fullPage flexCol justifyCenter alignCenter bg-quaternary">
            <h1>Welcome to FilmFeed</h1>
            <div className="flexCol alignCenter">
                <div>
                    <span className="light-purple-text">Log movies in your diary for your eyes only. </span>
                    <span className="orange-text">Write posts about movies to keep your friends updated. </span>
                    <span className="green-text">Make reviews for the world to see your critical perspective. </span>
                </div>
                <span className="light-blue-text">FilmFeed is the place for all your movie-discussing needs.</span>
            </div>
            <br />
            <form className="flexCol alignCenter">
                <label className="flexCol">
                    <input className="loginField" type="text" name="username" placeholder="Username" />
                    <br />
                    <input className="loginField" type="text" name="password" placeholder="Password" />
                    <br />
                </label>
                <button className="loginButton" onClick={(e) => changePage(e, "")}>Log-in</button>
                <br />
                <button className="bg-tertiary loginButton" onClick={(e) => changePage(e, "signup")}>Sign-up</button>
            </form>
            <h3 id="forgotPass" onClick={(e) => changePage(e, "forgotPassword")}>Forgot Password?</h3>
        </div>
    );
}

export default Login;