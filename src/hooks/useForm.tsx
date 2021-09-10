import React, { useState } from 'react'

const useForm = (formState: {[key:string] :any}) => {
  const [values, setValues] = useState<{[key:string] :any}>(formState)
  const [errors, setErrors] = useState<{[key: string] : string}>({});

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return { values, setValues, errors, setErrors, handleChange  };
}

export default useForm;