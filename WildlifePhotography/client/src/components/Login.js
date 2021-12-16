import { useNavigate } from 'react-router-dom';

import * as authServices  from '../services/authServices';

export function Login() {
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
                navigate('/');
            });

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
                                <label for="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                            </li>
                            <li>
                                <label for="password">Password:</label>
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


