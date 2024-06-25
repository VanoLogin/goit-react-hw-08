import { NavLink } from "react-router-dom";
import css from "./css.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
