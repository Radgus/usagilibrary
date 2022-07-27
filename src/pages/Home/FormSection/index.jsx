import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { firstNameError, emailError, telError, notesError } from './errorConfig';
import Form from './components/Form';
import Label from './components/Label';
import ValidateAlert from './components/ValidateAlert';
import Button from '../../Buttons/components/Button';


const Input = styled.input`
  outline: none;
  border: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background-color: #DCDCDC;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  background-color: #DCDCDC;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;

Form.Input = Input;
Form.TextArea = TextArea;
Form.Label = Label;
Form.ValidateAlert = ValidateAlert;

const FormSection = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log('form errors', errors);
  const alertTextFirstName = firstNameError(errors.firstName?.type);
  const alertTextEmail = emailError(errors.email?.type);
  const alertTextTel = telError(errors.tel?.type);
  const alertTextNotes = notesError(errors.notes?.type);
  
  return(
    <Form id='myform' onSubmit={handleSubmit(onSubmit)}>
      <Form.Label >Nombre completo *</Form.Label>
      <Form.Input 
        type="text" 
        placeholder="Nombre ..."
        {...register("firstName", {required: true, maxLength: 20})} 
      />
      {errors && <Form.ValidateAlert>{alertTextFirstName}</Form.ValidateAlert>}
      <Form.Label >Correo electrónico *</Form.Label>
      <Form.Input 
        type="email" 
        placeholder="email ..."
        {...register("email", {required: true, maxLength: 50, minLength: 5})} 
      />
      {errors && <Form.ValidateAlert>{alertTextEmail}</Form.ValidateAlert>}
      <Form.Label >Teléfono *</Form.Label>
      <Form.Input 
        type="tel" 
        placeholder="Teléfono ..."
        {...register("tel", {required: true, max: 20, min: 7})} 
      />
      {errors && <Form.ValidateAlert>{alertTextTel}</Form.ValidateAlert>}
      <Form.Label >Comentarios</Form.Label>
      <Form.TextArea 
        placeholder="Comentarios..."
        {...register("notes", {required: true, maxLength: 250})} 
      />
      {errors && <Form.ValidateAlert>{alertTextNotes}</Form.ValidateAlert>}
      <Button>Enviar</Button>
    </Form>
  )
}

export default FormSection;
