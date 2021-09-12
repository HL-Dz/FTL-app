import React, { FC } from 'react';
import CharacterCounter from '../../../../common/CharacterCounter/CharacterCounter';
import { IFieldData } from '../formFieldsData';
import "./TextareaField.scss";

interface TextareaFieldProps {
  field: IFieldData,
  value: any
  handleChange: (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  errors: {[key: string]:string}
}


const TextareaField: FC<TextareaFieldProps> = ({field, value, handleChange, errors}) => {
  return (
    <div className="operation__row">
      <div className="operation__title">
        {field.textareaTitle}
        <CharacterCounter value={value[field.name]} min={field.minCharacters} max={field.maxCharacters}/>
      </div>
      <textarea 
        value={value[field.name]}
        name={field.name} 
        className={`${field.class} operation__textarea`}
        placeholder="Type the title of the article..."
        autoFocus={field.autoFocus}
        onChange={handleChange}
      ></textarea>
      <div className="operation__error">{errors[field.name]}</div>
    </div>
  )
}

export default TextareaField;
