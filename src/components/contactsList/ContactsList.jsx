import PropTypes from 'prop-types'
import {Contact} from '../contact/Contact'

export const ContactList = ({contacts, onDeleteContact}) => {
    return ( <ul>
         {contacts.map((contact) => {
             return ( 
             <li key={contact.id}>
                 <Contact contact={contact} onDeleteContact={onDeleteContact}/>
             </li> 
             )
         })}
     </ul>
    )
 };

 ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.object),
    onDeleteContact: PropTypes.func}    