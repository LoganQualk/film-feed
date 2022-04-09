const Login = () => {

    const handleClick = () => {
        window.history.pushState({}, undefined, "/");
    }

    return (
        <div className="loginPage flexCol justifyCenter alignCenter">
            <h1>Welcome to FilmFeed</h1>
            <p className="flexCol alignCenter">
                <div>
                    <span className="light-purple-text">Log movies in your diary for your eyes only. </span>
                    <span className="orange-text">Write posts about movies to keep your friends updated. </span>
                    <span className="green-text">Make reviews for the world to see your critical perspective. </span>
                </div>
                <span className="light-blue-text">FilmFeed is the place for all your movie-discussing needs.</span>
            </p>
            <form className="flexCol alignCenter">
                <label className="flexCol">
                    <input className="loginField" type="text" name="username" placeholder="Username" />
                    <br />
                    <input className="loginField" type="text" name="password" placeholder="Password" />
                    <br />
                </label>
                <button className="loginButton" onClick={() => handleClick()}>Log-in</button>
                <br />
                <input className="bg-tertiary loginButton" type="submit" value="Sign-up" />
            </form>
            <h3>Forgot Password?</h3>
        </div>
    );
}

export default Login;