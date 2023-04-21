import { useEffect, useState } from 'react';
import { ContactList } from './contactsList/ContactsList';
import { AddContactForm } from './addForm/AddContactsForm';
import { FindContactForm } from './findContact/FindContactForm';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const dataConst = localStorage.getItem('contacts');
    if (dataConst) {
      return JSON.parse(dataConst);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.find(item => item.name === data.name)) {
      return alert(`Name ${data.name} is already in contacts!`);
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };
  const onChangeFind = ev => {
    setFilter(ev.currentTarget.value.toLowerCase());
  };
  const filteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <AddContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <FindContactForm onChangeFind={onChangeFind} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },