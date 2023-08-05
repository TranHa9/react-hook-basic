import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active1" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer App</NavLink>
            <NavLink activeClassName="active1" to="/todo">Todo App</NavLink>
            <NavLink activeClassName="active1" to="/blog">Blog</NavLink>
            <NavLink activeClassName="active1" to="#about">About</NavLink>
        </div>
    );
}
export default Nav;