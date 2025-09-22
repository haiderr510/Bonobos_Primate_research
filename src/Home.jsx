import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Saving Our Closest Relatives</h1>
          <h2>Bonobos are on the brink of extinction. Discover why their survival matters to all of us.</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            There are fewer than 20,000 bonobos surviving in the wild, and we are on the brink of a conservation crisis requiring immediate action. Join us to learn about and save these extraordinary primates.
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
                <strong>Geographic Range and Origin:</strong> The bonobos exclusively inhabit the Democratic Republic of Congo (DRC),
                but within the rainforests of lowlands below the Congo River. Their geographical isolation has made them one of the
                most endangered great apes whose entire species falls within one country with political instability.
              </p>
              <p>
                <strong>Species Profile:</strong> Bonobos (Pan paniscus) are some of our nearest living relatives and share 98.7% of our DNA.
                These amazing primates have empathetic, cooperative social structures that settle disputes by bonding instead of violence.
                Unlike chimpanzees, bonobos exist in matriarchal societies where females dominate and aggression is rare.
              </p>
              <p>
                <strong>Why I Chose This Research Topic:</strong> I chose to study bonobos because their name signifies someone who
                endured the same kind of ordeal as myself at another time in my life when I also endured. Their personal importance
                to me, combined with their vital conservation status and unique peaceful character, makes them an important subject
                to study for the uncovering of human evolution and successful conservation techniques.
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
          <h2>Statistical Evidence: Demonstrating Conservation Necessity</h2>
          <p>
            <strong>Numbers from "Impending extinction crisis of the world's primates" (Estrada et al., 2017):</strong>
            We have established that 60% of primate species are threatened by extinction and 75% are experiencing decline
            in their numbers. Bonobos are a primary case study to this global crisis.
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
              <div className="stat-label">Per Year Population Decline Rate</div>
            </div>
          </div>
          <p>
            <strong>Education Intervention Needed:</strong> Targeted education programs among communities are scientifically
            shown to reduce bonobo hunting by 60-80% in the target regions, and such conservation education plays a
            critical complementary role along with the protection of habitats. Habitat conservation costs only $50 million
            annually against the value of Congo Basin ecosystem services at $3.7 trillion.
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
                By studying bonobos, we discover important information about the evolution of humans, socialization, and
                how conflicts are resolved. This work is not merely valuable to academics—it's absolutely essential to
                developing sound conservation plans.
              </p>
              <p>
                My work focuses on discovering more about the behavior of bonobos and the urgent conservation needs of this
                endangered primate species. With each research study, we increase our knowledge and guide conservation work.
              </p>
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                — Haidar Rajabi, Student Researcher
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;