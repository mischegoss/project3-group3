import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link} from 'react-router-dom';

function signIn() {
    return(
        <div className="form">
            <form className="fields">
                <div className="field">
                <label className="fieldLable" htmlFor="username">Username:</label>
                <input type="text" id="username" className="formInput" name="username"/>
                </div>

                <div className="field">
                <label className="fieldLable" htmlFor="password">Password:</label>
                <input type="text" id="password" className="formInput" name="password"/>
                </div>

                <div className="field">
                    <button className="button mr-20">Sign In</button> <a href="/#">Create an account</a>
                </div>
            </form>
        </div>
    )
}

export default signIn;