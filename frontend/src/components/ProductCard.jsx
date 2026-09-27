import { ShoppingBag, Star } from 'lucide-react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addToCart } from '../redux/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  const handleAddToCart = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        <button className="quick-add" type="button" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`}>
          <ShoppingBag size={16} /> <span>Add to bag</span>
        </button>
      </div>
      <div className="product-copy">
        <p>{product.category || 'Everyday edit'}</p>
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-meta">
          <div className="product-price">
            <strong>${Number(product.price).toFixed(2)}</strong>
            {product.originalPrice && <del>${Number(product.originalPrice).toFixed(2)}</del>}
          </div>
          <span className="product-rating"><Star size={12} fill="currentColor" /> {product.rating || '4.7'} <small>({product.reviews || 48})</small></span>
        </div>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    badge: PropTypes.string,
  }).isRequired,
}
