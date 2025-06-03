import './styles.css';
import React, { useState } from 'react';
import { Button } from '../index';
import Input from '../common/Input';

interface Props {
  isLoginForm: boolean;
}

const LoginAndRegisterForm: React.FC<Props> = (
  {
    isLoginForm,
  }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (<div className="container login-register-form-wrap">
    {isLoginForm
      ? (<p className="title-form">Log in to Exclusive</p>)
      : (<p className="title-form">Create an account</p>)}

    <div className="guiding-text">
      <p>Enter your details below</p>
    </div>

    <form onSubmit={handleSubmit}>
      {isLoginForm ? (
          <div className="form-input">
            <Input
              type="text"
              placeholder="Name"
              isBorder={false}
              backgroundColor="transparent"
              isUnderline={false}
              onChange={(value) => setEmail(value)}
            />
            <Input
              type="text"
              placeholder="Email"
              isBorder={false}
              backgroundColor="transparent"
              isUnderline={false}
              onChange={(value) => setPassword(value)}
            />
            <Button
              text="Log I n"
              color="red"
              fullWidth={true}
              type="container"
            />
          </div>)
        :
        (<div className="form-input">
          <Input
            type="text"
            placeholder="Name"
            isBorder={false}
            backgroundColor="transparent"
            isUnderline={true}
            onChange={(value) => setName(value)}
          />
          <Input
            type="text"
            placeholder="Email"
            isBorder={false}
            backgroundColor="transparent"
            isUnderline={true}
            onChange={(value) => setEmail(value)}
          />
          <Input
            type="password"
            placeholder="Password"
            isBorder={false}
            backgroundColor="transparent"
            isUnderline={true}
            onChange={(value) => setPassword(value)}
          />
          <Button
            text="Create Account"
            color="red"
            fullWidth={true}
            type="container"
          />
        </div>)}
    </form>
  </div>);
};

export default LoginAndRegisterForm;