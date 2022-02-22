import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authServices'

export function Register() {
    const navigate = useNavigate();

    function registerHandler(e) {

        let formData = new FormData(e.currentTarget);
        let data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            repeatPassword: formData.get('rePassword'),
        };

        authService.register(data)
            .then((userData) => {
                if (!!userData.errors) {
                    navigate('/register')
                }
                else {
                    navigate('/login')
                }
            })
    };

    return (
        <div id="register-page">
            <div className="signupSection">
                <div className="info">
                    <h2>To discover and share knowledge about the environment in order to preserve and enrich life.</h2>
                </div>
                <form onSubmit={registerHandler} className="signupForm">
                    <h2>Sign Up</h2>
                    <ul className="noBullet">
                        <li>
                            <span>
                                <label>First Name:</label>
                                <input type="text" className="inputFields" id="first-name" name="firstName" placeholder="Alex" />
                            </span>
                        </li>
                        <li>
                            <label>Last Name:</label>
                            <input type="text" className="inputFields" id="last-name" name="lastName" placeholder="Petkov" />
                        </li>
                        <li>
                            <label>Username:</label>
                            <input type="text" className="inputFields" id="username" name="username" placeholder="alexaa" />
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                        </li>
                        <li>
                            <label>Password:</label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="******" />
                        </li>
                        <li>
                            <label>Repeat-Password:</label>
                            <input type="password" className="inputFields" id="rePassword" name="rePassword" placeholder="******" />
                        </li>
                        <li id="center-btn">
                            <button id="join-btn">Join</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}