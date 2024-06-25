import { NavLink } from "react-router-dom";
import css from "./css.module.css";

export default function AuthNavigation() {
  return (
    <nav>
      <ul className={css.container}>
        <li>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/logIn" className={css.link}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
