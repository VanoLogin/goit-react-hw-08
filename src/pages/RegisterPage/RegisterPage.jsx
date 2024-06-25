import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./css.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}
