import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

const ForgotPassword = () => {

    const { changePage } = useContext(GlobalContext);

    return (
        <div className="fullPage flexCol justifyCenter alignCenter bg-quaternary">
            <h1>Reset my password</h1>
            <h2>Enter your email address, and we'll send you a link to reset your password.</h2>
            <form>
                <label>
                    <input className="loginField" type="text" name="email" placeholder="Email address" />
                </label>
            </form>
            <button className="loginButton" onClick={() => alert("Email sent!")}>Send</button> { /* This would send an email to the user... but we won't do that ;) */}
            <br />
            <button className="bg-tertiary loginButton" onClick={(e) => {
                e.preventDefault();
                changePage("login");
            }}>Login/Sign-Up</button>
        </div>
    );
}

export default ForgotPassword;