import React, { FC } from 'react';
import AdminPresentation from '../../../../assets/images/AdminPresentation.gif';

interface InstructionProps {
  isfadeOutScreen: boolean,
}

const Instruction:FC<InstructionProps> = ({isfadeOutScreen}) => {
  return (
    <div className={isfadeOutScreen ? "instruction instruction_inactive" : "instruction"}>
      <img src={AdminPresentation} alt="Admin Presentation" />
    </div>
  )
}

export default Instruction;