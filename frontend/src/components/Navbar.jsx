import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { setSearchTerm } from '../redux/productSlice'
import Login from './Login'
import Logout from './Logout'
import Modal from './Modal'
import Register from './Register'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'Our story', href: '/#about' },
]

export default function Navbar() {
  const totalQuantity = useSelector((store) => store.cart.totalQuantity)
  const loggedUser = useSelector((store) => store.user.logged_user)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    if (!search.trim()) return
    dispatch(setSearchTerm(search.trim()))
    navigate('/filter-data')
    setIsMenuOpen(false)
  }

  return (
    <header className="store-header">
      <div className="announcement-bar">
        <p>Complimentary delivery on orders over $75</p>
        <span>Easy 30-day returns</span>
      </div>

      <div className="site-shell nav-main">
        <button className="mobile-menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <Link className="store-logo" to="/" aria-label="eShop home">e<span>/</span>shop</Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => item.to ? (
            <Link key={item.label} to={item.to}>{item.label}</Link>
          ) : (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <form className="nav-search" onSubmit={handleSearch}>
            <label className="sr-only" htmlFor="desktop-search">Search products</label>
            <input id="desktop-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the edit" />
            <button type="submit" aria-label="Search"><Search size={18} /></button>
          </form>

          {loggedUser ? (
            <button className="account-button" type="button" onClick={() => setIsLogoutOpen(true)}>
              <span className="account-avatar">{loggedUser.first_name?.[0] || 'U'}</span>
              <span>{loggedUser.first_name || 'Account'}</span>
            </button>
          ) : (
            <button className="account-button" type="button" onClick={() => setIsAuthOpen(true)}>
              <UserRound size={19} /><span>Sign in</span>
            </button>
          )}

          <Link className="cart-button" to="/cart" aria-label={`Shopping bag with ${totalQuantity} items`}>
            <ShoppingBag size={21} />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
          </Link>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? 'open' : ''}`}>
        <form className="mobile-search" onSubmit={handleSearch}>
          <Search size={17} />
          <label className="sr-only" htmlFor="mobile-search">Search products</label>
          <input id="mobile-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" />
        </form>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => item.to ? (
            <Link key={item.label} to={item.to} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
          ) : (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        {!loggedUser && <button type="button" onClick={() => { setIsAuthOpen(true); setIsMenuOpen(false) }}>Sign in or create an account</button>}
      </div>

      <Modal isModelOpen={isAuthOpen} setIsModelOpen={setIsAuthOpen}>
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
      </Modal>
      <Modal isModelOpen={isLogoutOpen} setIsModelOpen={setIsLogoutOpen}>
        <Logout />
      </Modal>
    </header>
  )
}
