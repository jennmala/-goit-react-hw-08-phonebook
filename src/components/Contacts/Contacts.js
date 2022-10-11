import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/auth';
import { getFilter } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useEffect } from 'react';

export const Contacts = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const filter = useSelector(getFilter);

  const navigate = useNavigate();

  const {
    data: contacts,
    error,
    isFetching,
    isError,
  } = useGetContactsQuery({
    // skip: contactName === '',
    // pollingInterval: 3000,
    refetchOnFocus: true,
  });

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  });

  const getFilteredContacts = () => {
    if (!contacts) return [];
    if (!filter) return contacts;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {isFetching && <h1>loading ... </h1>}
      {isError && <h1>{error.data}</h1>}

      {visibleContacts?.length && !isFetching && !isError ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p>There are no contacts</p>
      )}
    </>
  );
};
