import styles from "./styles.module.css";
import { deleteContact } from "../../redux/contacts/contactsOps.js";
import { useDispatch } from "react-redux";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={styles.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
}
