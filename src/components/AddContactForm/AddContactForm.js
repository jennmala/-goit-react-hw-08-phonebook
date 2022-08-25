import { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FormWrap, FormLabel, Input, AddBtn } from './AddContactForm.styled';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApi';

export const AddContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const onFormSumit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const sameContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (sameContact) {
      alert(name + ' is already in contacts.');
      return;
    }
    createContact({ name, phone });
    toast.success('Contact created successfully');
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      {/* {isSuccess && <Redirect to="" />} */}
      <FormWrap onSubmit={onFormSumit}>
        <FormLabel htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </FormLabel>

        <FormLabel htmlFor="">
          Number
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={onInputChange}
          />
        </FormLabel>

        <AddBtn type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Add contact'}
        </AddBtn>
      </FormWrap>
    </>
  );
};
