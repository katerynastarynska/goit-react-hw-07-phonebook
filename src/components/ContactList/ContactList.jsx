import { useSelector } from 'react-redux';
import { getFilterState } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/contactsAPI';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const { data: contacts } = useFetchContactsQuery();

  const filter = useSelector(getFilterState);

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

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