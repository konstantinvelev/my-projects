import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authServices from '../../services/authServices';

export function Login() {
    let { login } = useContext(AuthContext);
    
    let navigate = useNavigate();
    function loginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        authServices.login(data)
            .then((userData) => {
                if (!!data) {
                login(userData);
                navigate('/');
                }
            })
            .catch(err => {});
    }

    return (
        <div>
            <section id="login-page">
                <div className="loginSection">
                    <div className="info">
                        <h2>Welcome, again!</h2>
                        <p>View new posts.</p>
                    </div>
                    <form onSubmit={loginHandler} className="loginForm">
                        <h2>Login</h2>
                        <ul className="noBullet">
                            <li>
                                <label>Email:</label>
                                <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                            </li>
                            <li>
                                <label>Password:</label>
                                <input type="password" className="inputFields" id="password" name="password" placeholder="*******" />
                            </li>
                            <li id="center-btn">
                                <button id="login-btn">Login</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </div>
    )
}


