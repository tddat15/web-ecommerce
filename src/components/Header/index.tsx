import './styles.css';
import {Path} from "../../common/constant";

export default function Header() {

  return (
    <header>
      <div className="container header">
        <div className="logo">
          <img src="/logo.svg" alt="logo"/>
        </div>

        <nav className="navigation">
          <a href="/home">Home</a>
          <a href="/contacts">Contact</a>
          <a href="/about">About</a>
          <a href={`${Path.AUTH}/sign-up`}>Sign Up</a>
        </nav>

        <div className="search-wrapper">
          <div className="search">
            <input type="text" placeholder="What are you looking for?"/>
            <img src="/search-icon.svg" alt="search"/>
          </div>

          <img src="/heart-icon.svg" alt="favorite"/>
          <img src="/cart-icon.svg" alt="cart"/>
        </div>
      </div>

    </header>
  )
}

