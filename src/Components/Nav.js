import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="Link" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="Link" to="/new">
                        New
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
