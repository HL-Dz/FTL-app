export const isValidEmailFormData = (email:string, password:string) => {
  return (
    typeof email === 'string' && email !== '' && 
    typeof password === 'string' && password !== ''
  )
};