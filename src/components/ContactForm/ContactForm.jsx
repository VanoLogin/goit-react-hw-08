import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps.js";

import styles from "./styles.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required input field"),
  number: Yup.string()
    .min(3, "Too short")
    .max(12, "Too long")
    .required("Required input field"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.wraper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={styles.error} component="span" />
        </div>

        <div className={styles.wraper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" id={numberFieldId} />
          <ErrorMessage
            name="number"
            className={styles.error}
            component="span"
          />
        </div>
        <button type="submit" className={styles.addBtn}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
