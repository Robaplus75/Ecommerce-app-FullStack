import { Github, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="store-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Link className="store-logo light" to="/">e<span>/</span>shop</Link>
          <p>Useful things, expressive details, and a simpler way to discover what belongs in your everyday.</p>
          <div className="social-links">
            <a href="https://github.com/Robaplus75" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>

        <div className="footer-links">
          <p>Explore</p>
          <Link to="/shop">Shop all</Link>
          <a href="/#collections">Collections</a>
          <a href="/#about">Our story</a>
          <Link to="/cart">Shopping bag</Link>
        </div>

        <div className="footer-links">
          <p>Customer care</p>
          <a href="mailto:support@eshop.example">Contact us</a>
          <a href="#">Delivery & returns</a>
          <a href="#">Size guide</a>
          <a href="#">Frequently asked</a>
        </div>

        <div className="footer-note">
          <p>Need a hand?</p>
          <strong>We are here Monday-Friday, 9-5.</strong>
          <a href="mailto:support@eshop.example">support@eshop.example</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} eShop. All rights reserved.</span>
        <div><a href="#">Privacy</a><a href="#">Terms</a><span>USD / EN</span></div>
      </div>
    </footer>
  )
}
