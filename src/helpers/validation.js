export const isValidEmailFormData = (email, password) => {
  return (
    typeof email === 'string' && email !== '' && 
    typeof password === 'string' && password !== ''
  )
};