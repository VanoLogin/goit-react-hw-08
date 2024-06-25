import { useDispatch, useSelector } from "react-redux";
import css from "./css.module.css";
import { selectUser } from "../../redux/auth/authSlice";
import { logOut } from "../../redux/auth/authOperation";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  );
}
