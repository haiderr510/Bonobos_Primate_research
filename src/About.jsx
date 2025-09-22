import React from 'react';

function About() {
  return (
    <div className="custom-container">
      <div className="content-section">
        <h2>About me</h2>
        <div className="section-with-image">
          <div>
            <p>
              Hi! I'm Haidar Rajabi, an avid researcher interested in the conservation of primates. My passion for bonobos is close to heart – I researched them because their name reminds me of the individual who struggled through a challenge that I too had to struggle through during a different time in my life when I also had to struggle through the difficult periods. This close-to-heart passion conceived my academic interest in their unusual social organizations as well as in the grave conservation issues that face them.
            </p>
            <p>
              Through this research project, I aim to create more awareness of the conservation crisis facing bonobos and be part of humanity's attempt to preserve these wonderful primates. As bonobos demonstrate resilience and conflict resolution in peace among communities, I believe learning about and protecting our closest relatives in the primate kingdom is vital to maintaining biodiversity and learning useful lessons on how to transcend adversity.
            </p>
            <p>
              Feel free to contact me if you're interested in primate conservation or collaborating on research projects!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Primatology researcher in the field"
            className="section-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;