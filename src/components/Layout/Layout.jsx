import AppBar from "../AppBar/AppBar";
import css from "./css.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
