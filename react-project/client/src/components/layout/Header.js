import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'

export function Header() {

    let { user } = useAuthContext();

    let userNavigation = (
        <>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/my-posts">Posts of { }</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </>
    );

    let guestsNavigation = (
        <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </>
    );
    return (
        <nav>
            <img src="./img/logo.png" alt="logo" />
            <ul className="menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/all">All Posts</Link></li>
                {
                    !!(user?.id) ?
                          userNavigation
                        : guestsNavigation
                }
            </ul>
        </nav>
    )
}