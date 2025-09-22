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
              Bonobos (Pan paniscus) are the closest living human relatives and share about 98.7% DNA with humans.
              Adult bonobos weigh between 30-40 kg (66-88 lbs) with females being a bit shorter than males. They also have
              longer limbs, more narrow heads, and leaner bodies than the chimpanzees. They have black hair with a distinctive
              center part, and they retain pink lips for their entire life.
            </p>

            <h3>Social Structure & Behavior</h3>
            <p>
              Bonobos inhabit female-led, fission-fusion societies in which their troops dissolve and re-form within a day.
              But whereas chimpanzees settle disputes with violence, bonobos do so with sex, grooming, and play.
              They also possess unmatched empathy, cooperation, and altruism—attributes seldom found among other primates.
            </p>

            <h3>Diet & Habitat Needs</h3>
            <p>
              Bonobos are frugivorous and their diet consists of 60-80% fruits. They eat leaves, bark,
              stems, and the occasional insect as well. They need dense primary rainforest with high-density fruit trees, i.e., fig species.
              Their habitat needs are large territories (15-30 km²) with unbroken canopy cover.
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
              Bonobos occur exclusively in the Democratic Republic of Congo (DRC) and only in the rainforests south of the Congo River.
              They span about 500,000 km² of the Congo Basin, in provinces Bandundu, Équateur, Kasaï, and Kinshasa.
              The evolutionary divergence from chimpanzees was caused by geographical separation of the Congo River (about 1.6 million years ago).
            </p>

            <h3>Ecosystem & Biodiversity</h3>
            <p>
              Congo Basin is the second-largest tropical rainforest in the world at 3.7 million km². It has more than 10,000 endemic plant species,
              1,200 bird species, and 450 mammal species. Bonobos are keystone and frugivorous species and act as seed dispersers,
              and their long-distance travels line the forest with foods.
            </p>

            <h3>Country Profile: Democratic Republic of Congo</h3>
            <p>
              The Democratic Republic of the Congo (DRC) is the largest nation in Central Africa (2.3 million km²) and estimated at a population of about 95 million.
              It ranks among the poorest nations globally for its rich natural resources of cobalt, copper, diamonds, and forests attributed to
              poor political stability, leadership, and conflicts, which began in the 1990s.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Why I Selected This Research Topic</h2>

        <h3>Academic Interest: Exceptional Social Behavior</h3>
        <p>
          I was intrigued with bonobos when I took my undergraduate studies in primatology and found out about the interesting
          social structure of these animals. While the chimpanzees have become more violent, in a matriarchal society, the bonobos have been
          developed so that the females are in charge and conflicts are settled with sex instead of violence. This is an interesting
          evolutionary development that defies the conventional hypotheses of primate anatomy and human evolution.
        </p>

        <h3>Conservation Urgency</h3>
        <p>
          It was the core site of scientific significance and conservation need that was most enticing to me in this piece.
          Bonobos are classified as Endangered on the IUCN Red List, with a population of fewer than 20,000 remaining in increasingly
          fragmented environments. It is a race against time in which every study report is part of what is needed for effective conservation planning.
        </p>

        <h3>Human Evolution Insights</h3>
        <p>
          Bonobos are genetically most similar to human beings, with 98.7% similarity in DNA and give us valuable insights into the evolution of human beings and human sociality.
          They are able to attain empathy, cooperation, and conflict resolution peacefully, presenting a thrilling alternative to
          the "man the aggressive ape" mythology usually called upon when human origins are concerned. Information regarding bonobo society offers us
          an insight into the entire gamut of human social potential.
        </p>

        <h3>Personal Motivation</h3>
        <p>
          As a scientist, my interest lies in the possibility of contributing to conservation science that could possibly save one of our closest relatives from extinction.
          The interdisciplinary character of this study that combines behavioral ecology, conservation biology, and anthropology aligns with
          my academic preparation and professional aspirations in primatology.
        </p>
      </div>
    </div>
  );
}

export default Research;