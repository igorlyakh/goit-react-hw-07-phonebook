import ListElement from 'components/ListElement';
import React from 'react';
import { List, Wrapper } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  console.log(filter);
  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const visibleContacts = getFilteredContacts();

  return (
    <Wrapper>
      <h2>Contacts</h2>

      <List>
        {visibleContacts?.map(contact => {
          return (
            <ListElement
              name={contact.name}
              phone={contact.phone}
              id={contact.id}
              onDelete={onDelete}
              key={contact.id}
            />
          );
        })}
      </List>
    </Wrapper>
  );
};

export default ContactsList;
