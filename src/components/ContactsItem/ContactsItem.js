import toast from 'react-hot-toast';
import { Item, Name, Number, DeleteBtn } from './ContactsItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export const ContactsItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const delContact = () => {
    deleteContact(id);
    toast.success('Contact deleted successfully');
  };
  return (
    <Item>
      <Name>
        {name}: <Number>{phone}</Number>
      </Name>

      <DeleteBtn type="button" onClick={delContact} disabled={isDeleting}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
};
