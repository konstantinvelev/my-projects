import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authServices'

export function Register() {
    const navigate = useNavigate();

    function registerHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            rePassword: formData.get('rePassword'),
        };

        authService.register(data)
            .then((data) => {
                navigate('/')
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
                                <label for="first-name">First Name:</label>
                                <input type="text" className="inputFields" id="first-name" name="firstName" placeholder="Alex" />
                            </span>
                        </li>
                        <li>
                            <label for="last-name">Last Name:</label>
                            <input type="text" className="inputFields" id="last-name" name="lastName" placeholder="Petkov" />
                        </li>
                        <li>
                            <label for="email">Email:</label>
                            <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                        </li>
                        <li>
                            <label for="password">Password:</label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="******" />
                        </li>
                        <li>
                            <label for="repeat-password">Repeat-Password:</label>
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