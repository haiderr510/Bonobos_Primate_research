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
              Conservation Crisis
            </Link>
            <Link to="/politics-impact" className="cta-button secondary">
              Politics & Cultural Impact
            </Link>
            <Link to="/research" className="cta-button secondary">
              Research Data
            </Link>
          </div>
        </div>
      </section>

      <div className="custom-container">
        {/* Introduction Section */}
        <div className="content-section">
          <div className="section-with-image">
            <div>
              <h2>The Primate Under Study: Bonobos (Pan paniscus)</h2>
              <p>
                <strong>Geographic Origin and Range:</strong> Bonobos are found exclusively in the Democratic Republic of Congo (DRC),
                specifically in the lowland rainforests south of the Congo River. This unique geographic isolation has made them
                one of the most endangered great apes, with their entire species confined to a single country facing political instability.
              </p>
              <p>
                <strong>Species Profile:</strong> Bonobos (Pan paniscus) are among our closest living relatives, sharing 98.7% of our DNA.
                These remarkable primates are known for their empathetic, cooperative societies that resolve conflicts through bonding
                rather than violence. Unlike chimpanzees, bonobos live in matriarchal societies where females lead and aggression is rare.
              </p>
              <p>
                <strong>Why I Chose This Research Topic:</strong> I chose to study bonobos because their name relates to someone who
                overcame a similar struggle as me during a different time in my life when I too had to overcome challenges. This personal
                connection, combined with their critical conservation status and unique peaceful behavior, makes them an important subject
                for understanding both human evolution and effective conservation strategies.
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
          <h2>Statistical Evidence: Demonstrating Conservation Need</h2>
          <p>
            <strong>Data from "Impending extinction crisis of the world's primates" (Estrada et al., 2017):</strong>
            Research shows that 60% of primate species are threatened with extinction, and 75% have declining populations.
            Bonobos represent a critical case study in this global crisis.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15,000-20,000</span>
              <div className="stat-label">Bonobos Remaining in Wild (2023)</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">50-60%</span>
              <div className="stat-label">Population Decline (Last 30 Years)</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">75%</span>
              <div className="stat-label">Primary Forest Lost Since 1980</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">3-4%</span>
              <div className="stat-label">Annual Population Decline Rate</div>
            </div>
          </div>
          <p>
            <strong>Need for Education Intervention:</strong> Studies show that community education programs reduce
            bonobo hunting by 60-80% in target areas, demonstrating the critical importance of conservation education
            alongside habitat protection. The cost of protecting bonobo habitat ($50 million annually) is minimal
            compared to the $3.7 trillion value of Congo Basin ecosystem services.
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