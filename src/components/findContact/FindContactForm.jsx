import React from "react";
import PropTypes from 'prop-types'
import {StyledInput} from '../addForm/AddForm.styled'

export const FindContactForm = ({onChangeFind}) => {
    return (
        <>
        <h3>Find contacts by name</h3>
        <StyledInput type = "text" onChange={onChangeFind}/>
        </>
    )
}
FindContactForm.propTypes = {
    onChangeFind: PropTypes.func}
  