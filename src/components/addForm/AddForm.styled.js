import styled from 'styled-components'

export const Button = styled.button`
border: 1px solid;
border-radius: 4px;
font-size:16px;
padding: 8px;
margin: 10px;
max-width: 175px;
cursor: pointer;
&:hover {box-shadow: 1px 2px 2px 3px lightblue;}`

export const StyledForm = styled.form`
border: 1px solid;
border-radius: 2px;
display: flex;
flex-direction: column;
width: 400px;
padding:10px;
gap: 20px;
font-size:20px;
`
export const StyledInput = styled.input`
border-radius: 2px;
&:hover {box-shadow: 1px 2px 2px 3px lightblue;}
font-size:14px;
padding: 4px;
margin:7px;

`