import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsByName } from 'redux/FilterSlice';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilterState } from 'redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);

  const filter = useSelector(getFilterState);
  console.log(filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = e => {
    dispatch(filterContactsByName(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContacts} />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      {items.length >= 1 && <ContactList items={filteredContacts} />}
    </>
  );
};

export default App;
