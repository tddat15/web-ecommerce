import './styles.css';
import React from 'react';

interface Props {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  backgroundColor: 'transparent' | 'gray ';
  isUnderline?: boolean;
  isBorder?: boolean;
  onChange: (text: string) => void;
}

const Input: React.FC<Props> = (
  {
    type,
    placeholder,
    backgroundColor = 'transparent',
    isBorder = false,
    isUnderline = false,
    onChange,
  }) => {
  const classNames = [
    'input',
    `bg-${backgroundColor}`,
    isBorder ? 'bordered' : '',
    isUnderline ? 'underlined' : '',
  ].join(' ');

  return (
    <div className="input-wrap">
      <input
        className={classNames}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;