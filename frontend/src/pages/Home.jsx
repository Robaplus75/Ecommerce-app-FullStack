import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Play, Sparkles, Star } from 'lucide-react'
import HeroImage from '../assets/Images/hero-page.png'
import Headphones from '../assets/Images/headphone.jpg'
import Backpack from '../assets/Images/bag.jpg'
import { mockData } from '../assets/mockData'
import { setProducts } from '../redux/productSlice'
import CategorySection from '../components/CategorySection'
import InfoSection from '../components/infoSection'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const dispatch = useDispatch()
  const storedProducts = useSelector((state) => state.product.products)
  const products = storedProducts.length ? storedProducts : mockData

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [dispatch])

  return (
    <main className="home-page">
      <section className="site-shell pt-5 sm:pt-8">
        <div className="hero-grid">
          <div className="hero-copy">
            <div>
              <p className="section-kicker text-[#d94f2b]">
                <Sparkles size={15} aria-hidden="true" /> The autumn edit is here
              </p>
              <h1>Good finds.<br /><span>Better days.</span></h1>
              <p className="hero-description">
                Thoughtful everyday pieces, expressive essentials, and useful tech selected to make daily life feel a little more considered.
              </p>
              <div className="hero-actions">
                <Link className="primary-button" to="/shop">
                  Shop the edit <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a className="text-link" href="#collections">
                  <Play size={15} fill="currentColor" aria-hidden="true" /> Explore collections
                </a>
              </div>
            </div>

            <div className="hero-proof">
              <div className="customer-stack" aria-hidden="true">
                <span>AM</span><span>RK</span><span>JW</span>
              </div>
              <div>
                <div className="rating-row"><Star size={13} fill="currentColor" /> 4.8/5</div>
                <p>Loved by 2,400+ happy shoppers</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img src={HeroImage} alt="Shopper carrying colorful bags beside a full shopping cart" fetchPriority="high" />
            <div className="hero-note">
              <span>Fresh drop</span>
              <strong>Up to 30% off selected pieces</strong>
            </div>
            <div className="hero-index" aria-hidden="true">01 / 04</div>
          </div>
        </div>
      </section>

      <InfoSection />

      <section id="collections" className="site-shell section-space">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Shop your way</p>
            <h2>Made for every version of you.</h2>
          </div>
          <Link className="arrow-link" to="/shop">View all collections <ArrowRight size={16} /></Link>
        </div>
        <CategorySection />
      </section>

      <section className="site-shell pb-20 sm:pb-28">
        <div className="section-heading-row product-heading">
          <div>
            <p className="section-kicker">Customer favorites</p>
            <h2>The pieces people keep talking about.</h2>
          </div>
          <div className="review-summary">
            <span><Star size={14} fill="currentColor" /> 4.8</span>
            <p>Average across 1,200+ verified reviews</p>
          </div>
        </div>
        <div className="product-grid">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="site-shell pb-20 sm:pb-28">
        <div className="editorial-banner">
          <div className="editorial-copy">
            <p className="section-kicker text-[#ffb49f]">Sound, uninterrupted</p>
            <h2>Turn down the noise.<br />Keep what matters.</h2>
            <p>All-day comfort, rich sound, and a design that moves easily from focused work to the walk home.</p>
            <div>
              <Link className="light-button" to="/product/3">Discover the headphones <ArrowRight size={16} /></Link>
              <span className="editorial-price">From $59.99</span>
            </div>
          </div>
          <div className="editorial-image">
            <span className="floating-label">4.9 rated</span>
            <img src={Headphones} alt="Blue and teal studio headphones" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="site-shell pb-20 sm:pb-28">
        <div className="discovery-grid">
          <article className="discovery-story" id="about">
            <p className="section-kicker">Why eShop</p>
            <h2>Less scrolling.<br />More worth finding.</h2>
            <p>We bring together practical products and expressive details, making it easier to discover things that earn their place in your routine.</p>
            <ul>
              <li><BadgeCheck size={18} /> Clear pricing, no surprise fees</li>
              <li><BadgeCheck size={18} /> Products selected for quality and usefulness</li>
              <li><BadgeCheck size={18} /> Support before and after your order</li>
            </ul>
            <Link className="arrow-link" to="/shop">Start exploring <ArrowRight size={16} /></Link>
          </article>

          <article className="discovery-product">
            <div className="discovery-product-copy">
              <span>Staff pick / 010</span>
              <h3>Transit Weekender</h3>
              <p>One bag for the office, the airport, and everywhere between.</p>
              <Link to="/product/10">Shop now <ArrowRight size={15} /></Link>
            </div>
            <img src={Backpack} alt="Black travel backpack" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="newsletter-wrap">
        <div className="site-shell newsletter-inner">
          <div>
            <p className="section-kicker text-[#d94f2b]">A better inbox</p>
            <h2>New finds, useful notes, no clutter.</h2>
          </div>
          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" required />
            <button type="submit">Join the list <ArrowRight size={16} /></button>
          </form>
        </div>
      </section>
    </main>
  )
}
