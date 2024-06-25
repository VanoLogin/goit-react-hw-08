import { useDispatch } from "react-redux";
import { useId } from "react";
import { register } from "../../redux/auth/authOperation";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./styles.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required input field"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Mail is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => console.log(error));
    actions.resetForm();
  };

  const nameFieldId = useId();
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
          <label htmlFor={nameFieldId}>UserName</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={styles.error} component="span" />
        </div>

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
