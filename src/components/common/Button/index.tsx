import React from 'react';
import './styles.css';

interface ButtonProps {
  text: string;
  color: 'red' | 'white' | 'blue';
  type: 'container';
  fullWidth: boolean;
}


const Button: React.FC<ButtonProps> = (
  {
    text,
    color,
    type,
    fullWidth = false,
  }) => {
  return (
    <div className="button-wrap">
      <button>
        {text}
      </button>
    </div>

  );
};

export default Button;