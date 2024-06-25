import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/expenses" className={({ isActive }) => isActive ? 'active' : undefined}>Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/income" className={({ isActive }) => isActive ? 'active' : undefined}>Income</NavLink>
        </li>
        <li>
          <NavLink to="/savings" className={({ isActive }) => isActive ? 'active' : undefined}>Savings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;