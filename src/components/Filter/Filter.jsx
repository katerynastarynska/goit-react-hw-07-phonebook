import { useDispatch } from 'react-redux';
import { filterContactsByName } from 'redux/FilterSlice';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const filterContacts = e => {
    dispatch(filterContactsByName(e.currentTarget.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={filterContacts}
      />
    </label>
  );
}
