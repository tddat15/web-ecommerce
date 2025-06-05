import { LoginAndRegisterForm } from '../../components';
import React from 'react';
import './styles.css';

interface LoginAndRegisterProps {
  isLoginForm: boolean;
}

const LoginAndRegister: React.FC<LoginAndRegisterProps> = (
  {
    isLoginForm,
  }) => {
  return (
    <div className="container login-register-wrap">
      <div className="image-background">
        <img src="/login-image.jpg" alt="login-img" />
      </div>

      <div className="login-register-form">
        <LoginAndRegisterForm
          isLoginForm={isLoginForm}
        />
      </div>
    </div>
  );
};

export default LoginAndRegister;