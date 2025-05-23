import './styles.css'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email"/>
            <button type="submit">➤</button>
          </form>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com.</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="footer-column">
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="footer-column">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="download-app">
            <img src="/qr.png" alt="QR Code"/>
            <div className="store-buttons">
              <img src="/google-play.png" alt="Google Play"/>
              <img src="/app-store.png" alt="App Store"/>
            </div>
          </div>
          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🔗</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;