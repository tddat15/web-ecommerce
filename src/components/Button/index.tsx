import React from "react";
import 'styles.css'

interface ButtonProps {
  content: string;
}


const Button: React.FC<ButtonProps> = ({content}) => {
  return (
    <button>
      {content}
    </button>
  )
}

export default Button;