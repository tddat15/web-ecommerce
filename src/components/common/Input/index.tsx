import './styles.css';

interface Props {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  backgroundColor: 'transparent' | 'gray ';
  isUnderline?: boolean;
  isBorder?: boolean;
  onChange: (text: string) => void;
}

const Input: React.FC<Props> = ({ type, placeholder, isBorder, backgroundColor, isUnderline, onChange }) => {
  const classNames = [
    'custom-input',
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