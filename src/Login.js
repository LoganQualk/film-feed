const Login = () => {
    return ( 
        <div className="loginPage flexCol justifyCenter alignCenter">
            <h1>Welcome to FilmFeed</h1>
            <form className="flexCol">
                <label className="flexCol">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                </label>
                <input type="submit" value="Log-in"/>
                <input className="bg-tertiary" type="submit" value="Sign-up" />
            </form>
            <h3>Forgot Password?</h3>
        </div>
     );
}
 
export default Login;