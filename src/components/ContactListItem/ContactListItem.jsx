import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contactsAPI';
import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id }) {
  const [deleteContact, result] = useDeleteContactMutation();

  const handleDeleteContact = async () => {
    await deleteContact(id);
    toast.success(`${name} successfully removed from your phonebook!`);
  };

  return (
    <>
    {result.isLoading && <p>Deleting...</p>}
    <div className={css.contactListItemWrap}>
      <p className={css.contactListText}>
        {name}: {number}
      </p>
      <button
        className={css.contactListBtn}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
    </>
    
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
