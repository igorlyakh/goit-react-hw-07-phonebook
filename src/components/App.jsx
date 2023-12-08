import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hourglass } from 'react-loader-spinner';
import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';
import FilterField from './FilterField';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { getContacts } from 'redux/actions/contactActions';
import toast from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      {error && toast.error(error)}
      {isLoading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          colors={['#306cce', '#72a1ed']}
        />
      )}
      <h1>Phonebook</h1>
      <AddContactForm />
      <FilterField />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
};
