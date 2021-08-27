export const isValidEmailFormData = (email:string, password:string) => {
  return (
    typeof email === 'string' && email !== '' && 
    typeof password === 'string' && password !== ''
  )
};

export const isValidation = (value:string) => {
  let result = ''
  value = value.trim();

  if(!value) {
    result = 'The field is required.'
  } else if(value.length < 5){
    result = 'The field should be at least 5 characters.';
  } else if (value.match(/[а-яё]+/i)) {
    result = 'Only Latin characters are allowed.'
  }
  
  return result;
}