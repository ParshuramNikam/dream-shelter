import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
