import React, { useContext } from "react";
import Header from "./components/Header";
import { GlobalContext } from "./context/GlobalContext";

const Settings = () => {

    const { changePage } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <Header />
            <div className="fullPage flexCol alignCenter">
                <h1>Settings</h1>
                <form>
                    <label>
                        <div className="flexRow marginBottomSmall"><p className="pSetWidth">Change User Name</p><input type="text" name="changeUsername" placeholder="Current Username" /></div>
                        <div className="flexRow marginBottomSmall"><p className="pSetWidth">Change Real Name</p><input type="text" name="changeRealName" placeholder="Current Real Name" /></div>
                        <div className="flexRow marginBottomSmall"><p className="pSetWidth">Change Email</p><input type="text" name="changeEmail" placeholder="Current Email" /></div>
                        <div className="flexRow marginBottomSmall"><p className="pSetWidth">Change Password</p><input type="text" name="currentPassword" placeholder="Enter current password" /></div>
                        <div className="flexRow justifyEnd marginBottomSmall"><input type="text" name="newPassword" placeholder="Enter New Password" /></div>
                        <div><p>Default Post Visibility: Public</p></div>
                    </label>
                </form>
                <button className="defaultButton bg-tertiary" onClick={() => changePage("login")}>Sign-Out</button>
            </div>
        </React.Fragment>

    );
}

export default Settings;