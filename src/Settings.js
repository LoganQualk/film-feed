const Settings = () => {
    return ( 
        <div className="fullPage flexCol justifyCenter alignCenter">
            <form>
                <label>
                    <div className="flexRow"><p>Change User Name</p><input type="text" name="changeUsername" placeholder="Current Username"/></div>
                    <div className="flexRow"><p>Change Real Name</p><input type="text" name="changeRealName" placeholder="Current Real Name"/></div>
                    <div className="flexRow"><p>Change Email</p><input type="text" name="changeEmail" placeholder="Current Email"/></div>
                    <div className="flexRow"><p>Change Password</p><input type="text" name="currentPassword" placeholder="Enter current password"/></div>
                    <div><input type="text" name="newPassword" placeholder="Enter New Password"/></div>
                    <div><p>Default Post Visibility</p></div>
                </label>
            </form>
        </div>
     );
}
 
export default Settings;