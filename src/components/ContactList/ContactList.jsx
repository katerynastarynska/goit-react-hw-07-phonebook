import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={css.contactListItem} key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteContact={filteredContacts}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}
