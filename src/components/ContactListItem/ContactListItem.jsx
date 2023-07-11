import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
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
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
