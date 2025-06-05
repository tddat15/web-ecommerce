import React from 'react';
import './styles.css';

interface ButtonProps {
  text: string;
  color: 'red' | 'white' | 'green';
  type: 'container' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
}


const Button: React.FC<ButtonProps> = (
  {
    text,
    color,
    type,
    fullWidth = false,
    onClick,
  }) => {
  const classNames = [
    'button',
    `${type}`,
    `${type}-${color}`,
    fullWidth ? 'full-width' : '',
  ].join(' ');

  return (
    <div className="button-wrap">
      <button className={classNames} onClick={onClick}>
        {text}
      </button>
    </div>

  );
};

export default Button;