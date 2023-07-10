import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
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
    const id = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!validateName(name) || !validateNumber(number)) {
      return;
    }

    onSubmit({ name, number, id });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateName = name => {
    const regex = /^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$/;
    if (!regex.test(name)) {
      window.alert('Please enter a valid name');
      return false;
    }
    return true;
  };

  const validateNumber = number => {
    const regex =
      /^[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    if (!regex.test(number)) {
      window.alert('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  return (
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
  );
};

export default ContactForm;
