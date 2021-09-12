import React, { FC } from 'react';

interface OperationFieldProps {
  name: string
}

const OperationField: FC<OperationFieldProps> = ({name, children}) => {
  return (
    <div className="operation__field">
      <div className="operation__field-wrap">
        <span className="operation__sup">{name}</span>
        {children}
      </div>
    </div>
  )
}

export default OperationField;