import PropTypes from 'prop-types'
import {Button} from '../addForm/AddForm.styled'
export const Contact = ({contact:{name, number, id}, onDeleteContact}) => {
       return (
        <div style={{ margin: "0 auto",
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
         }}>
        <p>{name}:</p>
        <p>{number}</p>
        <Button type="button" onClick={() => {onDeleteContact(id)}}>Delete</Button>
        </div>
    )
};

Contact.propTypes = {
    contacts: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDeleteContact: PropTypes.func}
