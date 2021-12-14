export function Header() {
    return (
        <nav>
            <img src="./img/logo.png" alt="logo"/>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Posts</a></li>
                   
                    <li><a href="#">Create Post</a></li>
                    <li><a href="#">Posts of { }</a></li>
                    <li><a href="#">Logout</a></li>
                   
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
        </nav>
    )
}