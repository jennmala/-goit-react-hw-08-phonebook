import { useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const Contacts = () => {
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

  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
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
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactsItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      ) : (
        <p>There are no contacts</p>
      )}
    </>
  );
};
