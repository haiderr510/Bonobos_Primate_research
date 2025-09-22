import React from 'react';

function Conservation() {
  return (
    <div className="custom-container">
      <div className="content-section">
        <h2>The Conservation Crisis</h2>
        <div className="section-with-image">
          <div>
            <p>
              Bonobos face an unprecedented conservation crisis that threatens their very survival. As one of our closest
              living relatives, their potential extinction would represent not just a biological tragedy, but a profound
              loss for understanding human evolution and behavior.
            </p>
            <p>
              The primary threats include habitat destruction through logging and agriculture, hunting for bushmeat,
              and political instability in the Democratic Republic of Congo. Climate change further exacerbates these
              challenges, altering the delicate ecosystems bonobos depend on for survival.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Deforestation in Congo"
            className="section-image"
          />
        </div>
      </div>

      <div className="content-section">
        <h2>Critical Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">&lt;20,000</span>
            <div className="stat-label">Bonobos Remaining in Wild</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">75%</span>
            <div className="stat-label">Habitat Loss Since 1980</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">50%</span>
            <div className="stat-label">Population Decline (20 years)</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">10-15</span>
            <div className="stat-label">Years to Extinction at Current Rate</div>
          </div>
        </div>
        <p>
          These sobering statistics highlight the urgent need for immediate conservation action. Without intervention,
          we may witness the extinction of our closest relatives within the next decade—a loss that would be irreversible
          and devastating for both biodiversity and scientific understanding.
        </p>
      </div>

      <div className="content-section">
        <h2>Conservation Efforts and Hope</h2>
        <div className="section-with-image">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Conservation team in field"
            className="section-image"
          />
          <div>
            <p>
              Despite the challenges, dedicated conservation organizations and researchers are working tirelessly to
              protect bonobos. Initiatives include establishing protected reserves, working with local communities
              to develop sustainable livelihoods, and conducting crucial research to inform conservation strategies.
            </p>
            <p>
              The Bonobo Conservation Initiative, Lukuru Wildlife Research Foundation, and other organizations have
              made significant progress in habitat protection and community engagement. Their work demonstrates that
              with sufficient support and resources, bonobo populations can be stabilized and even recovered.
            </p>
            <p>
              Education and awareness campaigns have also proven effective in reducing hunting pressure and building
              local support for conservation. By involving communities in conservation efforts and providing economic
              alternatives, these programs create lasting protection for bonobos and their habitat.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Statistical Analysis: Demonstrating Conservation Need</h2>

        <h3>Population Decline Analysis</h3>
        <p>
          Based on data from Fruth et al. (2016) and recent surveys, bonobo populations have experienced catastrophic decline:
        </p>

        <div className="stats-grid" style={{ margin: '2rem 0' }}>
          <div className="stat-card">
            <span className="stat-number">15,000-20,000</span>
            <div className="stat-label">Current Wild Population (2023)</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">50-60%</span>
            <div className="stat-label">Population Decline (Last 30 Years)</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">3-4%</span>
            <div className="stat-label">Annual Decline Rate</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">10-15</span>
            <div className="stat-label">Years to Extinction (Current Rate)</div>
          </div>
        </div>

        <h3>Habitat Loss Statistics</h3>
        <p>
          Research from Hickey et al. (2013) and recent satellite data reveal alarming habitat destruction rates:
        </p>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          <li><strong>Forest Cover Loss:</strong> 75% of primary forest lost since 1980</li>
          <li><strong>Fragmentation:</strong> Remaining habitat divided into 180+ isolated fragments</li>
          <li><strong>Protected Area Coverage:</strong> Only 12% of bonobo range under formal protection</li>
          <li><strong>Annual Deforestation:</strong> 0.2-0.5% of remaining habitat lost yearly</li>
        </ul>

        <h3>Research from "Impending Extinction Crisis of the World's Primates"</h3>
        <p>
          According to Estrada et al. (2017), primates face unprecedented threats globally, with bonobos representing
          a critical case study:
        </p>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          <li><strong>Extinction Risk:</strong> 60% of primate species threatened with extinction</li>
          <li><strong>Population Decline:</strong> 75% of species experiencing population decreases</li>
          <li><strong>Great Ape Crisis:</strong> All great ape species except humans face extinction risk</li>
          <li><strong>Conservation Gap:</strong> Insufficient funding reaching 87% of threatened species</li>
        </ul>

        <h3>Economic Analysis of Conservation Need</h3>
        <p>
          Cost-benefit analysis demonstrates that immediate conservation intervention is economically justified:
        </p>
        <div className="section-with-image">
          <div>
            <p>
              <strong>Conservation Costs:</strong> Protecting remaining bonobo habitat requires approximately $50 million annually
              for park management, community programs, and anti-poaching efforts.
            </p>
            <p>
              <strong>Economic Benefits:</strong> Ecosystem services provided by Congo Basin forests (carbon storage, water regulation,
              biodiversity) valued at $3.7 trillion. Bonobo conservation protects these services while supporting sustainable
              eco-tourism generating $200 million potential annual revenue.
            </p>
            <p>
              <strong>Cost of Inaction:</strong> Complete extinction would represent irreversible loss of species holding crucial
              insights into human evolution, plus collapse of forest ecosystems supporting 10 million people.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Conservation research team"
            className="section-image"
          />
        </div>

        <h3>Education Intervention Evidence</h3>
        <p>
          Studies demonstrate that community education programs significantly improve conservation outcomes:
        </p>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <li><strong>Hunting Reduction:</strong> Education programs reduce bonobo hunting by 60-80% in target communities</li>
          <li><strong>Habitat Protection:</strong> Community-managed forests show 90% less deforestation than unmanaged areas</li>
          <li><strong>Economic Benefits:</strong> Conservation education creates alternative livelihoods for 70% of participants</li>
          <li><strong>Attitude Change:</strong> 85% of program participants report improved understanding of conservation importance</li>
        </ul>
      </div>
    </div>
  );
}

export default Conservation;