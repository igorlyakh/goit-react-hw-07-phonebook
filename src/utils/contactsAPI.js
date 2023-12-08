import { axios } from 'axios';

axios.defaults.baseURL = 'https://6573177f192318b7db41893b.mockapi.io/';

export const fetchContacts = async () => {
  const res = await axios.get('contacts');
  return await res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(`contacts/${id}`);
  return await res.data;
};

export const addNewContact = async contact => {
  const res = await axios.post('contacts', JSON.stringify(contact), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.data;
};
