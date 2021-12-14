import {Link } from 'react-router-dom';

export function Header() {
    return (
        <nav>
            <img src="./img/logo.png" alt="logo"/>
                <ul className="menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/all">All Posts</Link></li>
                   
                    <li><Link to="/create">Create Post</Link></li>
                    <li><Link to="/my-posts">Posts of { }</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                   
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
        </nav>
    )
}