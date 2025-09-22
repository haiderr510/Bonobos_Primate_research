import React from 'react';

function PoliticsImpact() {
  return (
    <div className="custom-container">
      <div className="content-section">
        <h2>Politics and Cultural Behavior: Drivers of Habitat Destruction</h2>

        <h3>Political Instability and Governance Failures</h3>
        <div className="section-with-image">
          <div>
            <p>
              The Democratic Republic of Congo has experienced decades of political instability, civil wars, and weak governance
              that directly contribute to bonobo habitat destruction. Since the First Congo War (1996-1997) and Second Congo War
              (1998-2003), the country has struggled with corruption, lack of law enforcement, and insufficient protected area management.
            </p>
            <p>
              Weak central government control has led to illegal logging operations, unregulated mining concessions, and inadequate
              protection of national parks. The absence of effective environmental law enforcement allows destructive activities
              to continue unchecked in bonobo habitats.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Deforestation and logging"
            className="section-image"
          />
        </div>
      </div>

      <div className="content-section">
        <h2>Economic Pressures and Resource Extraction</h2>

        <h3>Artisanal Mining and Forest Degradation</h3>
        <p>
          The DRC contains vast mineral wealth, including cobalt (60% of global supply), copper, gold, and diamonds.
          Artisanal mining operations, often unregulated, have expanded into bonobo habitats. These operations involve:
        </p>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          <li>Forest clearing for mining sites and access roads</li>
          <li>Water pollution from mining chemicals affecting forest streams</li>
          <li>Increased human settlements in previously pristine forest areas</li>
          <li>Hunting pressure as miners seek protein sources</li>
        </ul>

        <h3>Commercial Logging Concessions</h3>
        <p>
          Large-scale logging operations have been granted concessions covering millions of hectares of Congo Basin forest.
          While some companies claim sustainable practices, the reality often includes selective logging that fragments
          bonobo habitat and creates access roads that facilitate further human encroachment and hunting.
        </p>

        <div className="stats-grid" style={{ margin: '2rem 0' }}>
          <div className="stat-card">
            <span className="stat-number">18.7M</span>
            <div className="stat-label">Hectares of Logging Concessions</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">75%</span>
            <div className="stat-label">Forest Loss Since 1990</div>
          </div>
          <div className="stat-card">
            <span className="stat-number">200,000</span>
            <div className="stat-label">People Displaced by Mining</div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Cultural Behaviors Contributing to Population Decline</h2>

        <h3>Bushmeat Hunting and Cultural Practices</h3>
        <div className="section-with-image">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Local community in Congo forest"
            className="section-image"
          />
          <div>
            <p>
              Cultural hunting practices and bushmeat consumption pose significant threats to bonobo populations.
              While bonobos hold cultural significance in some local communities and are protected by traditional taboos,
              these protections have weakened due to cultural disruption from conflict and economic pressures.
            </p>
            <p>
              The breakdown of traditional authority structures during civil wars has led to the erosion of customary
              conservation practices. Additionally, population displacement has brought new ethnic groups into bonobo
              territories who may not share the same cultural prohibitions against hunting great apes.
            </p>
          </div>
        </div>

        <h3>Agricultural Expansion and Settlement Patterns</h3>
        <p>
          Subsistence agriculture remains the primary livelihood for 70% of the DRC's population. Cultural practices
          include slash-and-burn agriculture that, while traditionally sustainable in small populations, becomes
          destructive with population growth and shortened fallow periods.
        </p>
        <p>
          Population pressure has forced agricultural expansion into previously forested areas. The cultural preference
          for large families (average 6.2 children per woman) combined with limited economic opportunities creates
          continuous pressure for forest conversion to agricultural land.
        </p>
      </div>

      <div className="content-section">
        <h2>Conflict and Displacement Impact</h2>

        <h3>Armed Conflict and Environmental Destruction</h3>
        <p>
          Ongoing conflicts in eastern DRC have directly impacted bonobo conservation through:
        </p>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          <li><strong>Refugee movements:</strong> Displaced populations settle in forest areas, creating new pressure on resources</li>
          <li><strong>Military activities:</strong> Armed groups use forests for cover, disrupting wildlife and creating insecurity for conservation workers</li>
          <li><strong>Collapse of protected area management:</strong> Rangers flee conflict zones, leaving protected areas unguarded</li>
          <li><strong>Increased hunting:</strong> Food insecurity during conflicts leads to increased reliance on bushmeat</li>
        </ul>

        <h3>International Economic Factors</h3>
        <p>
          Global demand for minerals, timber, and agricultural products drives continued resource extraction in the DRC.
          International companies and markets create economic incentives for destructive practices, while weak governance
          prevents effective regulation of environmental impacts.
        </p>
        <p>
          The recent surge in demand for cobalt (essential for electric vehicle batteries) has intensified mining pressure
          in bonobo habitats, creating a paradox where "green" technology contributes to great ape habitat destruction.
        </p>
      </div>
    </div>
  );
}

export default PoliticsImpact;