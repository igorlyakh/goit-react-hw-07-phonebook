import ListElement from 'components/ListElement';
import React from 'react';
import { List, Wrapper } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { removeContact } from 'redux/actions/contactActions';

const ContactsList = () => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  const contacts = useSelector(selectFilteredContacts);

  return (
    <Wrapper>
      <h2>Contacts</h2>

      <List>
        {contacts?.map(contact => {
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
