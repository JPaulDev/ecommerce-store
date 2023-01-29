<article class="markdown-body entry-content container-lg" itemprop="text">
  <h1 dir="auto" align="center">E-commerce Store</h1>
  <p dir="auto">
    This project was designed to mimic a real e-commerce website, users are able
    to select from various different categories and view products created using 
    real world product data. Users are also able to create an account, login and
    edit their personal details or change their password.
  </p>
  <h2 dir="auto">Notes</h2>
  <p dir="auto">
    I wanted this project to be a truly full-stack application with user authentication
    which resulted in many challenges. Implementing user authentication properly
    required me to learn about security best practices which I did mainly from
    <a href="https://owasp.org/" rel="nofollow">OWASP</a>. There are some security features
    which have not been implemented such as rate limiting my API endpoints or geo-blocking
    as it was beyond the scope of this project. I would have also used Redis to handle user
    sessions instead of my postgreSQL database. This project was also the first
    time I used AWS which is where the database is hosted.
  </p>
  <h2 dir="auto">Features</h2>
  <ul dir="auto">
    <li>
      A basket that allows users to add and remove products.
    </li>
    <li>
      User authentication handled by Passport.js and session cookies.
    </li>
    <li>
      State and API endpoints handled with Redux.
    </li>
    <li>
      Front-end and back-end input validation.
    </li>
    <li>
      A postgreSQL database hosted on Amazon Web Services.
    </li>
    <li>
      Fully responsive down to mobile screen sizes.
    </li>
    <li>
      Tested with a combination of integration/unit tests using React Testing Library.
    </li>
  </ul>
  <h2 dir="auto">Tech Stack</h2>
  <ul dir="auto">
    <li>
      <a href="https://reactjs.org/" rel="nofollow">React</a>
    </li>
    <li>
      <a href="https://redux.js.org/" rel="nofollow">Redux</a>
    </li>
    <li>
      <a href="https://styled-components.com/" rel="nofollow">Styled Components</a>
    </li>
    <li>
      <a href="https://nextjs.org/" rel="nofollow">Next.js</a>
    </li>
    <li>
      <a href="https://www.framer.com/motion/" rel="nofollow">Framer Motion</a>
    </li>
    <li>
      <a href="https://www.prisma.io/" rel="nofollow">Prisma</a>
    </li>
    <li>
      <a href="https://www.postgresql.org/" rel="nofollow">PostgreSQL</a>
    </li>
    <li>
      <a href="https://www.passportjs.org/" rel="nofollow">Passport.js</a>
    </li>
    <li>
      <a href="https://jestjs.io/" rel="nofollow">Jest</a>
    </li>
    <li>
      <a href="https://testing-library.com/" rel="nofollow">React Testing Library</a>
    </li>
  </ul>
  <h2 dir="auto">Testing</h2>
  <p dir="auto">
    Most of the tests in this project are integration tests which are designed
    to reflect the way in which a user would interact with the application. They follow the
    <a href="https://testing-library.com/docs/guiding-principles">guiding principles</a>
    found in the Testing Library documentation.
  </p>
  <h2 dir="auto">Google Lighthouse</h2>
  <p dir="auto">
    Scores were calculated using incognito mode and a production build. Please note, the performance score will be
    lower on the vercel deployment as the project utilizes the free tier which is heavily limited.
  </p>
  <img
    src="https://user-images.githubusercontent.com/19373302/215332878-44204909-d44d-447a-b305-812acd5b1ab1.png"
    alt="Google lighthouse scores."
    style="max-width: 100%"
  />
  <h2 dir="auto">Live Demo</h2>
  <a href="https://ecommerce-store-jpauldev.vercel.app/" rel="nofollow"
    >https://ecommerce-store-jpauldev.vercel.app/</a
  >
  <h2 dir="auto">Preview</h2>
  <a
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://user-images.githubusercontent.com/19373302/215333496-9cfb7fac-72c4-4eb0-9f9c-b7925f2edff6.png"
    ><img
      src="https://user-images.githubusercontent.com/19373302/215333496-9cfb7fac-72c4-4eb0-9f9c-b7925f2edff6.png"
      alt="preview"
      style="max-width: 100%"
  /></a>
  <h2 dir="auto">License</h2>
  <p dir="auto">
    This project is licensed under the terms of the
    <strong
      ><a href="https://choosealicense.com/licenses/mit/" rel="nofollow"
        >MIT</a
      ></strong
    >
    license.
  </p>
</article>
