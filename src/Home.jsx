import React from 'react';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container className="mt-4">
      <header id="home">
        <h1>Bonobo Conservation Crisis: Monkeys on the brink</h1>
        <h2>by Haidar Rajabi</h2>
        <h3>Last updated 9/20/2025</h3>
      </header>

      <div id="primate" className="mt-4">
        <h2>The Primate I will study</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </div>

      <div id="origin" className="mt-4">
        <h2>Origin and country</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
      </div>

      <div id="research" className="mt-4">
        <h2>Why i chose this research topic</h2>
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
      </div>

      <div id="evidence" className="mt-4">
        <h2>Statistical Evidence for Conservation need</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
      </div>

      <div id="references" className="mt-4">
        <h2>References</h2>
        <ol>
          <li>Lorem, I., Ipsum, D., Dolor, S., et al. (2017). Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem Ipsum Journal, 3(1), e1600946.</li>
          <li>Consectetur, A., Adipiscing, E., Sed, D., et al. (2016). Dolor sit amet. The Lorem Ipsum List of Placeholder Text 2016.</li>
          <li>Tempor Incididunt Foundation. (2023). Ut Labore Partnership: Lorem Ipsum Status Report.</li>
          <li>Magna Aliqua Database. (2024). Ut enim Species Profile. Minim Veniam Union for Lorem Ipsum Specialist Group.</li>
        </ol>
      </div>
    </Container>
  );
}

export default Home;