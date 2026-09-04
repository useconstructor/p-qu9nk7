'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f5ede4' }}>
      {/* Sticky Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#1a1410',
          color: 'white',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="/" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.1em', color: 'white', textDecoration: 'none' }}>
          EMBER & OAK
        </a>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#coffee" style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em' }}>COFFEE</a>
          <a href="#subscriptions" style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em' }}>SUBSCRIPTIONS</a>
          <a href="#visit" style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em' }}>VISIT</a>
          <a href="#journal" style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em' }}>JOURNAL</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em' }}>ABOUT</a>
        </nav>
      </header>

      {/* Hero Section - Split Layout */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '85vh',
        }}
      >
        {/* Left Side - Image */}
        <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#2b2520' }}>
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
            alt="Coffee being poured"
            fill
            style={{ objectFit: 'cover', opacity: 0.9 }}
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
            backgroundColor: '#1a1410',
            color: 'white',
          }}
        >
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '24px', color: '#c8956b' }}>
            SPECIALTY ROASTERY · PORTLAND, OR
          </p>
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Coffee with<br />intention
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.85, maxWidth: '420px', marginBottom: '40px' }}>
            Every cup tells a story of origin, craft, and care. We source exceptional beans from 28 growing regions and roast them fresh in our Pearl District facility.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="#coffee"
              style={{
                background: '#c8956b',
                color: 'white',
                padding: '16px 36px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              SHOP COFFEE
            </a>
            <a
              href="#subscriptions"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '16px 36px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        style={{
          background: '#2b2520',
          padding: '48px 40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '80px',
        }}
      >
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8956b" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'Georgia, serif' }}>12+</span>
          </div>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#c8956b' }}>YEARS ROASTING</p>
        </div>

        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8956b" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'Georgia, serif' }}>28</span>
          </div>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#c8956b' }}>ORIGINS</p>
        </div>

        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8956b" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'Georgia, serif' }}>3,700+</span>
          </div>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#c8956b' }}>SUBSCRIBERS</p>
        </div>
      </section>

      {/* Featured Coffees - Product Grid */}
      <section id="coffee" style={{ padding: '100px 40px', backgroundColor: '#f5ede4' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', color: '#c8956b', marginBottom: '16px' }}>CURATED SELECTION</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1a1410', fontFamily: 'Georgia, serif' }}>Featured Coffees</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Coffee Card 1 */}
          <div style={{ background: 'white', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '280px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80"
                alt="Ethiopia Yirgacheffe"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>SINGLE ORIGIN</p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>Ethiopia Yirgacheffe</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>Floral, citrus, bergamot</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1a1410' }}>$22</span>
                <button
                  style={{
                    background: '#1a1410',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>

          {/* Coffee Card 2 */}
          <div style={{ background: 'white', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '280px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80"
                alt="Colombia Huila"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>SINGLE ORIGIN</p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>Colombia Huila</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>Caramel, red apple, chocolate</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1a1410' }}>$20</span>
                <button
                  style={{
                    background: '#1a1410',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>

          {/* Coffee Card 3 */}
          <div style={{ background: 'white', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '280px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80"
                alt="Guatemala Antigua"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>SINGLE ORIGIN</p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>Guatemala Antigua</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>Smoky, cocoa, brown sugar</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1a1410' }}>$21</span>
                <button
                  style={{
                    background: '#1a1410',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>

          {/* Coffee Card 4 */}
          <div style={{ background: 'white', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '280px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80"
                alt="House Blend"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>SIGNATURE BLEND</p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>House Blend</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>Balanced, nutty, dark chocolate</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1a1410' }}>$18</span>
                <button
                  style={{
                    background: '#1a1410',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="#"
            style={{
              color: '#1a1410',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              borderBottom: '2px solid #c8956b',
              paddingBottom: '4px',
            }}
          >
            VIEW ALL COFFEES
          </a>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
        {/* Left Side - Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            backgroundColor: '#1a1410',
            color: 'white',
          }}
        >
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '24px', color: '#c8956b' }}>OUR STORY</p>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Rooted in craft
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: '24px' }}>
            Since 2014, we have been dedicated to sourcing and roasting the finest specialty coffees. Our Pearl District roastery is where science meets artistry, and every batch is crafted with intention.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: '40px' }}>
            We partner directly with farmers across 28 origins, paying premium prices for exceptional quality while investing in sustainable practices that benefit communities and ecosystems.
          </p>
          <a
            href="#"
            style={{
              color: '#c8956b',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            LEARN MORE ABOUT US
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right Side - Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
          <div style={{ position: 'relative', backgroundColor: '#2b2520' }}>
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80"
              alt="Roastery interior"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', backgroundColor: '#2b2520' }}>
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80"
              alt="Coffee beans roasting"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', backgroundColor: '#2b2520' }}>
            <Image
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80"
              alt="Barista at work"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', backgroundColor: '#2b2520' }}>
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80"
              alt="Latte art"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section id="subscriptions" style={{ padding: '100px 40px', backgroundColor: '#f5ede4', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', color: '#c8956b', marginBottom: '16px' }}>NEVER RUN OUT</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1a1410', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
          Fresh coffee, delivered
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Join 3,700+ subscribers who receive freshly roasted beans at their door. Customize your frequency, roast preference, and quantity.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            background: '#c8956b',
            color: 'white',
            padding: '18px 48px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
          }}
        >
          START YOUR SUBSCRIPTION
        </a>
      </section>

      {/* Visit Section */}
      <section id="visit" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
        <div style={{ position: 'relative', backgroundColor: '#2b2520' }}>
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
            alt="Ember & Oak cafe interior"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            backgroundColor: '#2b2520',
            color: 'white',
          }}
        >
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '24px', color: '#c8956b' }}>PEARL DISTRICT</p>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Visit our café
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: '16px' }}>
            1247 NW Hoyt Street<br />
            Portland, OR 97209
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: '32px' }}>
            Monday – Friday: 7am – 6pm<br />
            Saturday – Sunday: 8am – 5pm
          </p>
          <a
            href="#"
            style={{
              color: '#c8956b',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            GET DIRECTIONS
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" style={{ padding: '100px 40px', backgroundColor: '#f5ede4' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', color: '#c8956b', marginBottom: '16px' }}>FROM THE ROASTERY</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1a1410', fontFamily: 'Georgia, serif' }}>Journal</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
          <article>
            <div style={{ position: 'relative', height: '220px', marginBottom: '20px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
                alt="Brewing guide"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>BREWING GUIDE</p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>The Perfect Pour-Over</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Master the art of manual brewing with our step-by-step guide.</p>
          </article>

          <article>
            <div style={{ position: 'relative', height: '220px', marginBottom: '20px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1524350876685-274059332603?w=400&q=80"
                alt="Coffee farm"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>ORIGIN STORY</p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>Visiting Huila, Colombia</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>A journey to meet the farmers behind our best-selling single origin.</p>
          </article>

          <article>
            <div style={{ position: 'relative', height: '220px', marginBottom: '20px', backgroundColor: '#2b2520' }}>
              <Image
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
                alt="Roasting process"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c8956b', marginBottom: '8px' }}>ROASTING</p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1410', marginBottom: '8px' }}>Understanding Roast Levels</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Light, medium, dark — how roast affects flavor in your cup.</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1410', color: 'white', padding: '60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', maxWidth: '1100px', margin: '0 auto 40px' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '20px' }}>EMBER & OAK</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6 }}>
              Specialty coffee roasted with intention in Portland, Oregon.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '20px', color: '#c8956b' }}>SHOP</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>All Coffee</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Subscriptions</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Equipment</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '20px', color: '#c8956b' }}>COMPANY</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>About Us</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Journal</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Wholesale</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '20px', color: '#c8956b' }}>CONNECT</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Instagram</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Twitter</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Newsletter</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>© 2026 Ember & Oak Coffee Roasters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
