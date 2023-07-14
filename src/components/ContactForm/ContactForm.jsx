import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toast, Toaster } from 'react-hot-toast';

import { addNewContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!validateName(name) || !validateNumber(number)) {
      return;
    }

    const isContactExist = items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!isContactExist) {
      const newContact = {
        name,
        number,
      };
      dispatch(addNewContact(newContact));
      toast.success(`${newContact.name} successfully added to your phonebook!`);
    } else {
      toast.error(`${name} is already in contacts`);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateName = name => {
    const regex = /^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$/;
    if (!regex.test(name)) {
      toast.error('Please enter a valid name');
      return false;
    }
    return true;
  };

  const validateNumber = number => {
    const regex =
      /^[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    if (!regex.test(number)) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '10px',
            color: '#0d55a7',
            backgroundColor: '#97deff24',
          },
        }}
      />
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.labelForm} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={css.inpurForm}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          required
          onChange={handleInputChange}
        />
        <label className={css.labelForm} htmlFor={numberInputId}>
          Number
        </label>
        <input
          className={css.inpurForm}
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          required
          onChange={handleInputChange}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
