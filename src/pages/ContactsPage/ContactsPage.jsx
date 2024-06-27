import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/NewContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/slice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isloggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isloggedIn && (
        <div>
          <p>Add your new Contact</p>
          <ContactForm />
          <ContactList />
        </div>
      )}
    </div>
  );
}
