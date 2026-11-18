
import { useState } from 'react'
import './App.css'

const menuItems = [
  {
    id: 1,
    name: 'Grilled Steak',
    category: 'Main Course',
    price: '$28',
    description: 'Tender grilled steak with fresh herbs and roasted vegetables.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700',
  },
  {
    id: 2,
    name: 'Creamy Pasta',
    category: 'Main Course',
    price: '$18',
    description: 'Fresh pasta tossed in a rich and creamy signature sauce.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700',
  },
  {
    id: 3,
    name: 'Classic Burger',
    category: 'Main Course',
    price: '$16',
    description: 'Juicy beef burger with cheese, lettuce and house sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700',
  },
  {
    id: 4,
    name: 'Chocolate Dessert',
    category: 'Desserts',
    price: '$12',
    description: 'Decadent chocolate dessert made for sweet moments.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700',
  },
  {
    id: 5,
    name: 'Fresh Salad',
    category: 'Starters',
    price: '$11',
    description: 'A refreshing mix of seasonal vegetables and greens.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700',
  },
  {
    id: 6,
    name: 'Signature Pizza',
    category: 'Main Course',
    price: '$20',
    description: 'Freshly baked pizza with mozzarella and signature toppings.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700',
  },
]

const categories = ['All', 'Starters', 'Main Course', 'Desserts']

const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700',
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [reservationSent, setReservationSent] = useState(false)

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  function handleReservation(event) {
    event.preventDefault()
    setReservationSent(true)
    event.target.reset()
  }

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="brand">
            <span className="brand-icon">✦</span>
            Maison<span>Table</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#reservation"
              className="nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Book a Table
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <p className="eyebrow">WELCOME TO MAISON TABLE</p>
            <h1>
              A Taste of
              <br />
              <span>Something Special.</span>
            </h1>
            <p className="hero-description">
              Discover exceptional flavors, thoughtfully prepared dishes,
              and unforgettable moments around the table.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="button button-gold">
                Explore Our Menu
              </a>
              <a href="#reservation" className="button button-outline">
                Reserve a Table
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>FRESH INGREDIENTS</span>
            <span>CRAFTED WITH PASSION</span>
            <span>MADE TO BE ENJOYED</span>
          </div>
        </section>

        <section className="about section-padding" id="about">
          <div className="container about-grid">
            <div className="about-images">
              <img
                className="about-main-image"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
                alt="Elegant restaurant dining table"
              />
              <div className="about-image-label">
                <strong>Est. 2020</strong>
                <span>Made with passion</span>
              </div>
            </div>

            <div className="about-content">
              <p className="eyebrow">OUR STORY</p>
              <h2>
                Good Food.
                <br />
                <span>Beautiful Moments.</span>
              </h2>
              <p>
                At Maison Table, we believe great food brings people together.
                Our kitchen combines fresh ingredients, creative cooking,
                and a passion for memorable dining.
              </p>
              <p>
                Every dish is prepared with care, every detail is considered,
                and every guest is welcomed like family.
              </p>
              <a href="#menu" className="text-link">
                Discover Our Menu →
              </a>
            </div>
          </div>
        </section>

        <section className="menu-section section-padding" id="menu">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A LITTLE TASTE OF MAISON</p>
              <h2>Our Special Menu</h2>
              <p>Fresh flavors and delicious creations made for you.</p>
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? 'filter active' : 'filter'}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredItems.map((item) => (
                <article className="menu-card" key={item.id}>
                  <div className="menu-image">
                    <img src={item.image} alt={item.name} />
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <div className="menu-card-content">
                    <span className="menu-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reservation section-padding" id="reservation">
          <div className="container reservation-grid">
            <div className="reservation-content">
              <p className="eyebrow">YOUR TABLE IS WAITING</p>
              <h2>Make Your Evening Special.</h2>
              <p>
                Join us for a memorable dining experience. Choose your
                preferred date and let us take care of the rest.
              </p>
              <div className="reservation-detail">
                <span>Opening Hours</span>
                <strong>Monday – Sunday</strong>
                <strong>12:00 PM – 11:00 PM</strong>
              </div>
            </div>

            <form className="reservation-form" onSubmit={handleReservation}>
              <h3>Book a Table</h3>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-row">
                <input type="date" required />
                <input type="time" required />
              </div>
              <select defaultValue="" required>
                <option value="" disabled>
                  Number of Guests
                </option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
              <textarea placeholder="Special Requests (Optional)" rows="4" />
              <button type="submit" className="button button-gold">
                Request Reservation
              </button>
              {reservationSent && (
                <p className="form-success">
                  Your request has been received in this demo. Backend booking
                  is not connected yet.
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="gallery section-padding" id="gallery">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A VISUAL EXPERIENCE</p>
              <h2>Inside Maison Table</h2>
              <p>A glimpse of our food, atmosphere, and dining experience.</p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div className="gallery-item" key={image}>
                  <img src={image} alt={`Restaurant gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews section-padding">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">KIND WORDS</p>
              <h2>Guest Experiences</h2>
            </div>

            <div className="reviews-grid">
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  “Beautiful atmosphere, delicious food, and wonderful
                  service. A lovely place for a special evening.”
                </p>
                <strong>Sarah M.</strong>
              </article>
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  “Every dish was full of flavor. The presentation and
                  attention to detail were excellent.”
                </p>
                <strong>Daniel R.</strong>
              </article>
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  “A welcoming experience from beginning to end.
                  I would happily visit again.”
                </p>
                <strong>Olivia K.</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">COME SAY HELLO</p>
              <h2>We Would Love to Welcome You.</h2>
              <p>
                Whether it is a casual lunch or a special celebration,
                we look forward to seeing you.
              </p>
            </div>
            <div className="contact-info">
              <div>
                <span>VISIT US</span>
                <strong>123 Culinary Street, Your City</strong>
              </div>
              <div>
                <span>CALL US</span>
                <strong>+1 234 567 890</strong>
              </div>
              <div>
                <span>EMAIL</span>
                <strong>hello@maisontable.com</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="brand">
            <span className="brand-icon">✦</span>
            Maison<span>Table</span>
          </a>
          <p>© 2026 Maison Table. Crafted with passion.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
