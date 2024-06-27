import { useSelector } from "react-redux";
import AuthNavigation from "../AuthNavigation/AuthNavigation.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./css.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </div>
  );
}
