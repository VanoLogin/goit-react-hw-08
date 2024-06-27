import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import styles from "./styles.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice.js";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
