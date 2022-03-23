import { NavLink } from "react-router-dom";
import css from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={css.header}>
      {/* <h1 className={css.logo}>Quote Game</h1> */}
      <NavLink className={css.logo} to="/quotes">
        Quote Game
      </NavLink>
      <nav className={css.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={css.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-quote" activeClassName={css.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
