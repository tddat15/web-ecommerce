import './styles.css';

export default function Header() {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="logo"/>
        </div>

        <nav className="navigation">
          <a href="/home">Home</a>
          <a href="/contacts">Contact</a>
          <a href="/about">About</a>
          <a href="/sign-up">Sign Up</a>
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

