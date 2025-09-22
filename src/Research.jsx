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
              Bonobos (Pan paniscus) are our closest living relatives and have approximately 98.7% of their DNA in common with humans.
              Adult bonobos typically weigh 30-40 kg (66-88 lbs), with women being slightly shorter than men. They have
              longer limbs, narrower heads, and more slender bodies compared to chimpanzees. They have black hair with a distinctive
              center part, and they retain pink lips for life.
            </p>

            <h3>Social Structure & Behavior</h3>
            <p>
              Bonobos live in female-dominated, fission-fusion societies where their troops disband and form again within the day.
              Unlike chimpanzees, though, bonobos resolve disputes with sex, grooming, and play instead of fighting.
              They have unparalleled empathy, cooperation, and altruism—attributions rarely seen in other primates.
            </p>

            <h3>Diet & Habitat Requirements</h3>
            <p>
              Bonobos are predominantly frugivorous and their diet contains 60-80% fruits. They consume leaves, bark,
              stems, and the occasional insect too. They require dense primary rainforest with high-density fruit trees, i.e., fig species.
              Their habitat requirements include large territories (15-30 km²) with unbroken canopy cover.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1605027990121-3b2c503c71d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Bonobo in natural habitat"
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
            alt="Congo rainforest"
            className="section-image"
          />
          <div>
            <h3>Geographic Distribution</h3>
            <p>
              Bonobos only occur in the Democratic Republic of Congo (DRC), specifically in the rainforests south of the Congo River.
              They range over approximately 500,000 km² of the Congo Basin, spanning the provinces of Bandundu, Équateur, Kasaï, and Kinshasa.
              Their divergent evolution from chimpanzees was caused by the Congo River's geographical isolation (approximately 1.6 million years ago).
            </p>

            <h3>Ecosystem & Biodiversity</h3>
            <p>
              Congo Basin is the world's second-largest tropical rainforest at 3.7 million km². It contains over 10,000 endemic plant species,
              1,200 bird species, and 450 mammal species. Bonobos are keystone species and seed dispersers, while their frugivorous diet and
              far-ranging movements keep the forest renewing.
            </p>

            <h3>Country Profile: Democratic Republic of Congo</h3>
            <p>
              The DRC is the largest country in Central Africa (2.3 million km²) and is inhabited by approximately 95 million individuals.
              Despite vast natural resources of cobalt, copper, diamonds, and forests, it ranks among the world's poorest countries
              due to political instability, weak governance, and ongoing conflicts which have persisted since the 1990s.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Why I Chose This Topic of Study</h2>

        <h3>Academic Interest: Outstanding Social Behavior</h3>
        <p>
          I became interested in bonobos during my undergraduate course on primatology when I learned about their fascinating
          social structure. Unlike chimpanzees, bonobos have evolved a matriarchal society where the females rule and conflicts
          are resolved through sexual behavior rather than aggression. This is a fascinating evolutionary process that goes against
          the traditional theories regarding primate biology and human evolution.
        </p>

        <h3>Conservation Urgency</h3>
        <p>
          What drew me most to this research was the critical point of scientific importance and necessity for conservation.
          Bonobos are listed as Endangered on the IUCN Red List, and fewer than 20,000 survive in increasingly
          fragmented habitats. This creates a race against time where each research study feeds into what is required for successful conservation planning.
        </p>

        <h3>Human Evolution Insights</h3>
        <p>
          Bonobos have 98.7% of their DNA in common with humans and provide vital information about human evolution and human social behavior.
          Their ability for empathy, cooperation, and non-violent resolution of conflict provides an empowering counter-narrative to
          the "aggressive ape" myth typically invoked in discussions of human origins. Insights into bonobo society shed light on
          the entire range of human social possibilities.
        </p>

        <h3>Personal Motivation</h3>
        <p>
          As a scientist, my drive is the potential to accelerate conservation science that potentially could prevent the extinction
          of one of our closest relatives. The multidisciplinary nature of this study that combines behavioral ecology,
          conservation biology, and anthropology is consistent with my academic career and professional interests in primatology.
        </p>
      </div>
    </div>
  );
}

export default Research;