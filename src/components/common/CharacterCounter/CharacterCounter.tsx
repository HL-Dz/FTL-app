import React, { FC } from 'react';
import "./CharacterCounter.scss";

interface CharacterCounterProps {
  value: string
  min: number
  max: number
}

const CharacterCounter: FC<CharacterCounterProps> = ({value,min,max}) => {
  return (
    <>
      {
        value.length > 0 ? 
          <span
            className={
              value.length < min || value.length > max ? "character-count  character-count_invalid" : "character-count"}
          >{value.length} chars.</span> : null
      }
    </>
  )
}

export default CharacterCounter;