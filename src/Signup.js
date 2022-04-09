const Signup = () => {
    return ( 
        <div className="loginPage flexCol justifyCenter alignCenter">
            <h1>FilmFeed</h1>
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
                <button className="bg-tertiary loginButton">Sign-up</button>
            </form>
        </div>
     );
}
 
export default Signup;