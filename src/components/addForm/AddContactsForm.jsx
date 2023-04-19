import { Component } from 'react';
import PropTypes from 'prop-types'
import {Button, StyledForm, StyledInput} from '../addForm/AddForm.styled'

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ( ev ) => {
    const{name, value} = ev.target;
    this.setState({ [name]: value });
     };
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '',
    number: '',})
  };
   render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label>
          Name<br/>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}/>
        </label>
        <label>
          Number<br/>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <Button> Add contact</Button>
      </StyledForm>
    );
  }
};

AddContactForm.propTypes = {
  addContact: PropTypes.func
    }


