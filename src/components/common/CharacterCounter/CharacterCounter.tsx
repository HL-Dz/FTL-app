import React, { FC } from 'react';
import "./CharacterCounter.scss";
interface CharacterCounterProps {
  value: string
  min: number
  max: number
}

const CharacterCounter: FC<CharacterCounterProps> = ({value,min,max}) => {
  let cls = (value.length < min || value.length > max )  ? "character-count  character-count_invalid" :
            (value.length >= min || value.length <= max) ? "character-count character-count_valid" : "character-count";

  return (
    <>
      {
        value.length > 0 ? <span className={cls}>{value.length} chars.</span> : null
      }
    </>
  )
}

export default CharacterCounter;