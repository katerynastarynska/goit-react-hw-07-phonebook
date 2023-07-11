import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList({ items, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {items.map(({ name, number, id }) => (
        <li className={css.contactListItem} key={id}>
          <ContactListItem
            name={name}
            number={number}
            // onDeleteContact={onDeleteContact}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  // onDeleteContact: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

