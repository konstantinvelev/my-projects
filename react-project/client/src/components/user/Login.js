import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext';
import * as authServices from '../../services/authServices';

export function Login() {
    let { login } = useAuthContext();
    let navigate = useNavigate();
    
    function loginHandler(e) {
        let formData = new FormData(e.currentTarget);
        let data = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        authServices.login(data)
            .then((userData) => {
                if (!!userData.errors) {
                    navigate('/login')
                }
                else {
                    login(userData);
                    navigate('/');
                }
            })
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
                                <label>Username:</label>
                                <input type="text" className="inputFields" id="username" name="username" placeholder="Alexxaa" />
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


