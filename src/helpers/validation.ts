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

export const articleValidation = (values: {[key: string]:any}) => {
  let errors: {[key: string]:any} = {};

  // Title field
  if(!values.title.trim()) {
    errors.title = 'Article title is required'
  } else if(values.title.length < 20 || values.title.length > 150) {
    errors.title = 'Min - 20, max - 150 characters.';
  } else if (values.title.match(/[а-яё]+/i)) {
    errors.title = 'Only Latin characters are allowed.';
  }

  // ShortDescr field
  if(!values.shortDesc.trim()) {
    errors.shortDesc = 'Short article description is required';
  } else if (values.shortDesc.length < 20 || values.shortDesc.length > 300) {
    errors.shortDesc = 'Min - 20, max - 300 characters.';
  } else if (values.shortDesc.match(/[а-яё]+/i)) {
    errors.shortDesc = 'Only Latin characters are allowed.';
  }

  // Description field
  if(!values.description.trim()) {
    errors.description = 'Article description is required'
  } else if (values.description.length < 50 || values.description.length > 20000) {
    errors.description = 'Min - 50, max - 20000 characters.';
  } else if (values.description.match(/[а-яё]+/i)) {
    errors.description = 'Only Latin characters are allowed.';
  }

  // Photo URL field
  if(!values.photoUrl.trim()) {
    errors.photoUrl = 'Photo URL is required';
  } else if (!/^(http|https):\/\/[^ "]+$/.test(values.photoUrl)) {
    errors.photoUrl = 'Invalid photo url. Should contain ( http:// or https:// ).';
  } else if (values.photoUrl.match(/[а-яё]+/i)) {
    errors.photoUrl = 'Only Latin characters are allowed.';
  }

  // PhotoBy field
  if(!values.photoBy.trim()) {
    errors.photoBy = 'Photo owner field is required';
  } else if(values.photoBy.length < 5 || values.photoBy.length > 50) {
    errors.photoBy = 'Min - 5, max - 50 characters.';
  } else if (values.photoBy.match(/[а-яё]+/i)) {
    errors.photoBy = 'Only Latin characters are allowed.';
  }

  // Article author field
  if(!values.author.trim()) {
    errors.author = 'Article author field is required'
  } else if(values.author.length < 5 || values.author.length > 50) {
    errors.author = 'Min - 5, max - 50 characters.';
  } else if (values.author.match(/[а-яё]+/i)) {
    errors.author = 'Only Latin characters are allowed.';
  }
  return errors;
}