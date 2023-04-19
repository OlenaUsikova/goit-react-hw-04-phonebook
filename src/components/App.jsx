import { Component } from 'react';
import { ContactList } from './contactsList/ContactsList';
import { AddContactForm } from './addForm/AddContactsForm';
import { FindContactForm } from './findContact/FindContactForm';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount(){
    const dataCont = localStorage.getItem('this.contacts')
    console.log(dataCont);
    if(dataCont !== null){
      this.setState({contacts:JSON.parse(dataCont)})
    }
  } 
  componentDidUpdate(_, prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = data => {
    if(this.state.contacts.find(item =>item.name === data.name))
    {return alert(`Name ${data.name} is already in contacts!`)} 
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
     };
  onChangeFind = ev => {
    this.setState({ filter: ev.currentTarget.value.toLowerCase() });
  };
  filteredContacts = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
  };

  render() {
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
        <AddContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <FindContactForm onChangeFind={this.onChangeFind} />
        <ContactList
          contacts={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
};

