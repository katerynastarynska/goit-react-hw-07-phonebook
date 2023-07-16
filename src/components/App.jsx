import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { useFetchContactsQuery } from 'redux/contactsAPI';

const App = () => {
  const { data: contacts, isError, isFetching } = useFetchContactsQuery();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isFetching && <Loader />}
      {isError && <p>Service not available</p>}
      {contacts && contacts.length >= 1 && <ContactList />}
    </>
  );
};

export default App;
