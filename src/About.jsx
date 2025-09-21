import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container className="mt-4">
      <div className="p-4 bg-light rounded">
        <h2>About Me</h2>
        <p>
          Hi! I'm Haidar Rajabi, a passionate researcher focused on primate conservation.
          My interest in bonobos began during my undergraduate studies in primatology,
          where I learned about their unique social structures and the critical threats they face.
        </p>
        <p>
          Through this research project, I aim to raise awareness about the conservation crisis
          facing bonobos and contribute to the global effort to protect these remarkable primates.
          I believe that understanding and protecting our closest relatives in the animal kingdom
          is crucial for maintaining biodiversity and understanding our own evolutionary history.
        </p>
        <p>
          Feel free to reach out if you'd like to discuss primate conservation or collaborate on research projects!
        </p>
      </div>
    </Container>
  );
}

export default About;