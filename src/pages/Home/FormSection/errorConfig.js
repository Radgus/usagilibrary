
export const firstNameError = (error) => {
  switch (error) {
    case 'required':  return 'El nombre es requerido'
    case 'maxLength':  return 'Longitud máxima de 20 caracteres'
    default:  return '';
  }
}

export const emailError = (error) => {
  switch (error) {
    case 'required':  return 'El correo es requerido'
    case 'maxLength':  return 'Longitud máxima de 50 caracteres'
    case 'minLength':  return 'Min length is 5 caracteres'
    default:  return '';
  }
}

export const telError = (error) => {
  switch (error) {
    case 'required':  return 'EL número telefónico es requerido'
    case 'max':  return 'Longitud máxima de 20 caracteres'
    case 'min':  return 'Longitud mínima de 07 caracteres'
    default:  return '';
  }
}

export const notesError = (error) => {
  switch (error) {
    case 'maxLength':  return 'Longitud máxima de 250 caracteres'
    default:  return '';
  }
}