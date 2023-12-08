import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';
import FilterField from './FilterField';
import { selectContacts } from 'redux/selectors';
import { getContacts } from 'redux/actions/contactActions';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      <FilterField />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
};
