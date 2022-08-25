import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { MainTitle, Title } from './ContactPage.styled';

export const ContactPage = () => {
  return (
    <>
      <MainTitle>Phonebook</MainTitle>

      <AddContactForm />

      <Title>Contacts</Title>

      <Filter />

      <Contacts />
    </>
  );
};
