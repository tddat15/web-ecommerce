import './styles.css';
import { Path } from '../../common/constant';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <div className="container header">
        <div className="logo">
          <img src="/logo.svg" alt="logo"/>
        </div>

        <nav className="navigation">
          <Link to={`/${Path.HOME}`}>Home</Link>
          <Link to={`/${Path.HOME}`}>Contacts</Link>
          <Link to={`/${Path.HOME}`}>About</Link>
          <Link to={`/${Path.AUTH}/sign-up`}>Sign Up</Link>
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

