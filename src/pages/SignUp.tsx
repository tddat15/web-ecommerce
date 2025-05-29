import Header from "../components/Header";
import Footer from "../components/Footer";
import {LoginAndRegister} from "../layouts";

export default function SignUp() {
  return (
    <>
      <Header/>
      <main>
        <LoginAndRegister isLoginForm={false}/>
      </main>
      <Footer/>
    </>
  )
}