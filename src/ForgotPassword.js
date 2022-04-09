import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleClick = async (event, page) => {
        event.preventDefault();
        navigate("/" + page);
    }

    return ( 
        <div className="loginPage flexCol justifyCenter alignCenter">
            <h1>Reset my password</h1>
            <h2>Enter your email address, and we'll send you a link to reset your password.</h2>
            <form>
                <label>
                    <input className="loginField" type="text" name="email" placeholder="Email address" />
                </label>
                <button className="loginButton">Send</button>
            </form>
            <button className="bg-tertiary loginButton" onClick={(e) => handleClick(e, "login")}>Login/Sign-Up</button>
        </div>
     );
}
 
export default ForgotPassword;