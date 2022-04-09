import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

const Signup = () => {

    const {changePage} = useContext(GlobalContext);

    return ( 
        <div className="fullPage flexCol justifyCenter alignCenter bg-quaternary">
            <h1>FilmFeed</h1>
            <div className="flexCol alignCenter">
                <div>
                    <span className="light-purple-text">Log movies in your diary for your eyes only. </span>
                    <span className="orange-text">Write posts about movies to keep your friends updated. </span>
                    <span className="green-text">Make reviews for the world to see your critical perspective. </span>
                </div>
                <span className="light-blue-text">FilmFeed is the place for all your movie-discussing needs.</span>
            </div>
            <form className="flexCol alignCenter">
                <label className="flexCol">
                    <input className="loginField" type="text" name="email" placeholder="Email" />
                    <br />
                    <input className="loginField" type="text" name="username" placeholder="Username" />
                    <br />
                    <input className="loginField" type="text" name="password" placeholder="Password" />
                    <br />
                    <input className="loginField" type="text" name="confirm" placeholder="Confirm Password" />
                    <br />
                </label>
                <br />
                <button className="bg-tertiary loginButton" onClick={(e) => changePage(e, "login")}>Sign-up</button>
            </form>
        </div>
     );
}
 
export default Signup;