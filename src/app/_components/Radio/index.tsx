import React from 'react'
import classes from './index.module.scss'
import { on } from 'stream'

interface RadioButtonProps {
  label: string
  value: string
  isSelected: boolean
  onRadioChange: (value: string) => void
  groupName: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  isSelected,
  onRadioChange,
  groupName,
}) => {
    const handleRadioChange = () => {
        onRadioChange(value)
    }
    
  return (
    <label className={classes.radioWrapper}>
      <input
        type="radio"
        checked={isSelected}
        onChange={() => onRadioChange(value)}  // Pass the value directly
        className={classes.radio}
        name={groupName}
      />
      {label}
    </label>
  )
}
