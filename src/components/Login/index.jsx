import React, { useState } from 'react';
import './index.scss';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

export const Login = () => {
    const [userInfo, setUserinfo] = useState({});
    const [dataUser, setDataUser] = useState({});
    const [isSignedInGG, setIsSignedInGG] = useState(false);
    const [isSignedInFB, setIsSignedInFB] = useState(false);
    const responseFacebook= response => {
        if (response?.name) {
            setUserinfo(response);
        }
        if (response.name) {
            setIsSignedInFB(true);
        } else {
            setIsSignedInFB(false);
        }
    }
    const deleteAllCookies = () => {
        setIsSignedInFB(false);
    }

    const responseGoogle = res => {
        if (res.profileObj) {
            setDataUser(res.profileObj);
        }
        if (res.profileObj) {
            setIsSignedInGG(true);
        } else {
            setIsSignedInGG(false);
        }
    }
    const handleLogoutGG = () => {
        setIsSignedInGG(false);
    }
    
    return (
        <div className="wraper">
           {isSignedInFB && <div className="display-info">{userInfo.name}</div>}
            {dataUser.email && isSignedInGG && <div className="display-info">
            {dataUser.email}
            <img src={dataUser.imageUrl} alt="avatar-user" />
        </div>}
        <div className="login">
            {isSignedInFB ? <button className="btn-logout" onClick={deleteAllCookies}>Logout</button> : <FacebookLogin
                appId="4479829265472329"
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                    <button className="btn-login-fb" onClick={renderProps.onClick}>
                        <i className="fa fa-facebook"/>
                        Facebook
                    </button>
                )}
            /> }
            {!isSignedInGG && <GoogleLogin
                clientId="404920419207-80doat85ip14u30c3gh2vh4j5ovr4au2.apps.googleusercontent.com"
                render={renderProps => (
                <button className="btn-login-gg" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <i className="fa fa-google"/>
                    Google
                </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />}
            {isSignedInGG && <button className="btn-logout" onClick={handleLogoutGG}>
                Logout
            </button>}
        </div>
     </div>
    )
};
