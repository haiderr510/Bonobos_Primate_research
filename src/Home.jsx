import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Saving Our Closest Relatives</h1>
          <h2>Bonobos are on the brink of extinction. Discover why their survival matters for all of us.</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            With fewer than 20,000 bonobos remaining in the wild, we are witnessing a conservation crisis that demands
            immediate action. Join us in understanding and protecting these remarkable primates.
          </p>
          <div className="hero-cta">
            <Link to="/conservation" className="cta-button">
              Learn About Conservation
            </Link>
            <Link to="/research" className="cta-button secondary">
              Explore Research
            </Link>
          </div>
        </div>
      </section>

      <div className="custom-container">
        {/* Introduction Section */}
        <div className="content-section">
          <div className="section-with-image">
            <div>
              <h2>Meet the Bonobos: Our Peaceful Cousins</h2>
              <p>
                Bonobos (Pan paniscus) are among our closest living relatives, sharing 98.7% of our DNA with humans.
                These remarkable primates live exclusively in the Democratic Republic of Congo (DRC), south of the Congo River,
                and are known for their empathetic, cooperative societies that resolve conflicts through bonding rather than violence.
              </p>
              <p>
                I chose to study bonobos because their name relates to someone who overcame a similar struggle as me
                during a different time in my life when I too had to overcome challenges. Unlike their chimpanzee cousins,
                bonobos live in matriarchal societies where females lead and conflicts are rare, offering profound insights
                into human evolution and the potential for peaceful coexistence.
              </p>
              <Link to="/research" className="cta-button" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Discover More
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Bonobo in natural habitat in Congo rainforest"
              className="section-image"
            />
          </div>
        </div>

        {/* Crisis Overview */}
        <div className="content-section">
          <h2>A Species in Crisis</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">&lt;20K</span>
              <div className="stat-label">Bonobos Left</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">75%</span>
              <div className="stat-label">Habitat Lost</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">50%</span>
              <div className="stat-label">Population Decline</div>
            </div>
          </div>
          <p>
            The numbers tell a stark story. Bonobos face unprecedented threats from deforestation, hunting, and
            habitat destruction. Without immediate action, we may lose these remarkable creatures forever.
          </p>
        </div>

        {/* Research Impact */}
        <div className="content-section">
          <div className="section-with-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Conservation researcher studying primates in Congo Basin"
              className="section-image"
            />
            <div>
              <h2>Research That Matters</h2>
              <p>
                By studying bonobos, we gain crucial insights into human evolution, social behavior, and
                conflict resolution. This research is not just academically important—it's essential for
                developing effective conservation strategies.
              </p>
              <p>
                My work focuses on understanding bonobo behavior and the urgent conservation needs of this
                critically endangered species. Every study contributes to our knowledge and helps inform
                protection efforts.
              </p>
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                — Haidar Rajabi, Primatology Researcher
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;