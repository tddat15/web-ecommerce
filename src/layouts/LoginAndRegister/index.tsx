import { LoginAndRegisterForm } from '../../components';

interface LoginAndRegisterProps {
  isLoginForm: boolean;
}

const LoginAndRegister: React.FC<LoginAndRegisterProps> = (
  {
    isLoginForm,
  }) => {
  return (
    <div className="container login-register-wrap">
      <img src="/login-image.jpg" alt="login-img" />
      <LoginAndRegisterForm
        isLoginForm={isLoginForm}
      />
    </div>
  );
};

export default LoginAndRegister;