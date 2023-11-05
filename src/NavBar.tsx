import { NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/users" >Users</NavLink>
                </li>
                <li>
                    <NavLink to="/products" >Products</NavLink>
                </li>
                <li>
                    <NavLink to="/carts" >Carts</NavLink>
                </li>
            </ul>
            </nav>
    );
};

