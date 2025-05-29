import './styles.css';
import { useState } from 'react';

interface Props {
  isLoginForm: boolean;
}

const LoginAndRegisterForm: React.FC<Props> = ({
                                                 isLoginForm,
                                               }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (<div className="container login-register-wrap">
    {isLoginForm ? (<p className="tile-form">Log in to Exclusive</p>) :
      <p className="tile-form">Create an account</p>}
    <p>Enter your details below</p>

    <form onSubmit={handleSubmit}>
      {isLoginForm ? (
          <div className="form-input">
            <label>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>)
        :
        (<div className="form-input">
          <label>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>)}
    </form>
  </div>);
};

export default LoginAndRegisterForm;