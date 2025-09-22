import React from 'react';

function Research() {
  return (
    <div className="custom-container">
      <div className="content-section">
        <h2>Primate Species Profile: Pan paniscus (Bonobo)</h2>
        <div className="section-with-image">
          <div>
            <h3>Physical Characteristics</h3>
            <p>
              Bonobos (Pan paniscus) are one of our closest living relatives, sharing approximately 98.7% of their DNA with humans.
              Adult bonobos typically weigh between 30-40 kg (66-88 lbs), with females slightly smaller than males. They have
              longer limbs, smaller heads, and more slender builds compared to chimpanzees. Their black hair often shows a distinctive
              center part, and they retain pink lips throughout their lives.
            </p>

            <h3>Social Structure & Behavior</h3>
            <p>
              Bonobos live in female-dominated, fission-fusion societies where groups split and merge throughout the day.
              Unlike chimpanzees, bonobos resolve conflicts through sexual behavior, grooming, and play rather than aggression.
              They demonstrate remarkable empathy, cooperation, and altruism—behaviors rarely seen in other primates.
            </p>

            <h3>Diet & Habitat Requirements</h3>
            <p>
              Bonobos are primarily frugivorous, with fruits comprising 60-80% of their diet. They also consume leaves, bark,
              stems, and occasionally insects. They require dense, primary rainforest with abundant fruit trees, particularly
              fig species. Their habitat needs include large territories (15-30 km²) with continuous canopy cover.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1605027990121-3b2c503c71d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="coming soon"
            className="section-image"
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Conservation Status</h3>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div className="stat-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" style={{ fontSize: '2rem' }}>Endangered</span>
              <div className="stat-label">IUCN Red List Status</div>
            </div>
            <div className="stat-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" style={{ fontSize: '2rem' }}>&lt;20,000</span>
              <div className="stat-label">Wild Population</div>
            </div>
            <div className="stat-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" style={{ fontSize: '2rem' }}>Decreasing</span>
              <div className="stat-label">Population Trend</div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Origin and Country: Democratic Republic of Congo</h2>
        <div className="section-with-image">
          <img
            src="https://images.unsplash.com/photo-1596430643491-bc85d59c0b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="coming soon"
            className="section-image"
          />
          <div>
            <h3>Geographic Distribution</h3>
            <p>
              Bonobos are endemic to the Democratic Republic of Congo (DRC), specifically in the rainforests south of the Congo River.
              They occupy approximately 500,000 km² of the Congo Basin, spanning the provinces of Bandundu, Équateur, Kasaï, and Kinshasa.
              This geographic isolation by the Congo River (approximately 1.6 million years ago) led to their evolutionary divergence from chimpanzees.
            </p>

            <h3>Ecosystem & Biodiversity</h3>
            <p>
              The Congo Basin is the world's second-largest tropical rainforest, covering 3.7 million km². It contains over 10,000 endemic plant species,
              1,200 bird species, and 450 mammal species. Bonobos serve as keystone species and seed dispersers, maintaining forest regeneration
              through their frugivorous diet and wide-ranging movements.
            </p>

            <h3>Country Profile: Democratic Republic of Congo</h3>
            <p>
              The DRC is Central Africa's largest country (2.3 million km²) with a population of approximately 95 million people.
              Despite vast natural resources including cobalt, copper, diamonds, and timber, it remains one of the world's poorest nations
              due to political instability, weak governance, and ongoing conflicts that have persisted since the 1990s.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Why I Chose This Research Topic</h2>

        <h3>Academic Interest: Unique Social Behavior</h3>
        <p>
          My fascination with bonobos began during my undergraduate primatology course when I learned about their extraordinary
          social structure. Unlike chimpanzees, bonobos have evolved a matriarchal society where females lead and conflicts
          are resolved through sexual behavior rather than aggression. This represents a unique evolutionary pathway that
          challenges traditional assumptions about primate behavior and human origins.
        </p>

        <h3>Conservation Urgency</h3>
        <p>
          What drew me most to this research was the critical intersection of scientific importance and conservation urgency.
          Bonobos are classified as Endangered on the IUCN Red List, with fewer than 20,000 individuals remaining in increasingly
          fragmented habitats. This creates a race against time where every research study contributes to understanding necessary
          for effective conservation strategies.
        </p>

        <h3>Human Evolution Insights</h3>
        <p>
          Bonobos share 98.7% of their DNA with humans and offer crucial insights into human evolution and social behavior.
          Their capacity for empathy, cooperation, and peaceful conflict resolution provides a powerful counter-narrative to
          the "aggressive ape" stereotype often applied to human origins. Understanding bonobo society helps us comprehend
          the full spectrum of human social potential.
        </p>

        <h3>Personal Motivation</h3>
        <p>
          As a researcher, I am driven by the opportunity to contribute to conservation science that could prevent the extinction
          of one of our closest relatives. The multidisciplinary nature of this research—combining behavioral ecology,
          conservation biology, and anthropology—aligns with my academic interests and career goals in primatology.
        </p>
      </div>
    </div>
  );
}

export default Research;