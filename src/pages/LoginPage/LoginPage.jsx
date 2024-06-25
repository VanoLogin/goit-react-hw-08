import LoginForm from "../../components/LoginForm/LoginForm";

import css from "./css.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}
