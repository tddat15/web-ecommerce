import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoginAndRegister } from '../layouts';

export default function SignIn() {
  return (
    <>
      <Header />
      <main>
        <LoginAndRegister isLoginForm={true} />
      </main>
      <Footer />
    </>
  );
}