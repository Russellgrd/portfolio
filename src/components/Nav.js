import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <ul className="Nav">
            <li className="Nav-child Nav-child-1"><Link to="/">RGD</Link></li>
            <li className="Nav-child"><Link to="/about">About</Link></li>
            <li className="Nav-child"><Link to="/portfolio">Portfolio</Link></li>
            <li className="Nav-child"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default Nav;