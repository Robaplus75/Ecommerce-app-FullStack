import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import MenImage from '../assets/Images/man.png'
import WomenImage from '../assets/Images/woman.png'
import KidsImage from '../assets/Images/kid.png'

const categories = [
  {
    title: 'For him',
    subtitle: 'Everyday layers and practical details',
    image: MenImage,
    tone: 'sky',
  },
  {
    title: 'For her',
    subtitle: 'Easy statements for every kind of day',
    image: WomenImage,
    tone: 'butter',
  },
  {
    title: 'For kids',
    subtitle: 'Color, comfort, and room to move',
    image: KidsImage,
    tone: 'rose',
  },
]

export default function CategorySection() {
  return (
    <div className="collection-grid">
      {categories.map((category, index) => (
        <Link key={category.title} className={`collection-card ${category.tone}`} to="/shop">
          <span className="collection-index">0{index + 1}</span>
          <div>
            <p>{category.subtitle}</p>
            <h3>{category.title}</h3>
            <span className="collection-link">Explore edit <ArrowUpRight size={15} /></span>
          </div>
          <img src={category.image} alt={`${category.title} collection`} loading="lazy" />
        </Link>
      ))}
    </div>
  )
}
