import { Headphones, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'

const infoItems = [
  { icon: Truck, title: 'Free delivery', description: 'On orders over $75' },
  { icon: RefreshCcw, title: 'Easy returns', description: '30-day return window' },
  { icon: ShieldCheck, title: 'Secure checkout', description: 'Protected at every step' },
  { icon: Headphones, title: 'Human support', description: 'Help when you need it' },
]

export default function InfoSection() {
  return (
    <section className="site-shell trust-strip" aria-label="Shopping benefits">
      {infoItems.map(({ icon: Icon, title, description }) => (
        <div key={title} className="trust-item">
          <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
          <div><strong>{title}</strong><span>{description}</span></div>
        </div>
      ))}
    </section>
  )
}
