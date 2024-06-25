import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import styles from "./styles.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Mail is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .catch((error) => console.log(error));
    actions.resetForm();
  };

  const passwordFieldId = useId();
  const emailFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.wraper}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field name="email" id={emailFieldId} />
          <ErrorMessage
            name="email"
            className={styles.error}
            component="span"
          />
        </div>
        <div className={styles.wraper}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field name="password" id={passwordFieldId} />
          <ErrorMessage
            name="password"
            className={styles.error}
            component="span"
          />
        </div>
        <button type="submit" className={styles.addBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
