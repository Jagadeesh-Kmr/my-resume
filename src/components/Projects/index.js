import {
  ProjectsBgContainer,
  MyProjects,
  ProjectsHrLine,
  ProjectHeading,
  ProjectHadingContainer,
  TechnologiesUsedContainer,
  TechnologiesUsed,
  TechSpan,
} from './styledComponents'

const Projects = () => (
  <>
    <ProjectsBgContainer>
      <MyProjects>Project</MyProjects>
      <ProjectsHrLine />
      <ProjectHadingContainer>
        <div>
          <ProjectHeading>Jobby App</ProjectHeading>
        </div>
        <div>
          <p>
            <a
              href="https://jagadeeshjb.ccbp.tech/login"
              target="_blank"
              rel="noreferrer"
            >
              Project1 Link
            </a>
          </p>
        </div>
      </ProjectHadingContainer>
      <TechnologiesUsedContainer>
        <TechnologiesUsed>
          <TechSpan>Technologies used:</TechSpan> React JS, JS, CSS, Bootstrap,
          Routing, REST API Calls, Local Storage, JWT Token, Authorization,
          Authentication <br />
        </TechnologiesUsed>
        <TechnologiesUsed style={{marginTop: '20px'}}>
          Brought to life an all-encompassing job search platform, Jobby App.
          (username: rahul Password: rahul@2021)
        </TechnologiesUsed>
        <ul>
          <li style={{marginBottom: '5px'}}>
            Created pages for Login, Home, Jobs, and Job item details with React
            components, form inputs, and event handlers.
          </li>
          <li style={{marginBottom: '5px'}}>
            Secured user information with JWT tokens, REST API calls, and local
            storage.
          </li>
          <li style={{marginBottom: '5px'}}>
            Utilized React Router for protected routes and persisted login
            state.
          </li>
        </ul>
      </TechnologiesUsedContainer>

      <ProjectHadingContainer>
        <div>
          <ProjectHeading>
            Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)
          </ProjectHeading>
        </div>
        <div>
          <p>
            <a
              href="https://jagadeeshsp.ccbp.tech/login"
              target="_blank"
              rel="noreferrer"
            >
              Project2 Link
            </a>
          </p>
        </div>
      </ProjectHadingContainer>
      <TechnologiesUsedContainer>
        <TechnologiesUsed>
          <TechSpan>Technologies used:</TechSpan> : React JS, JS, CSS,
          Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
          Authorization, Authentication <br />
        </TechnologiesUsed>
        <TechnologiesUsed style={{marginTop: '20px'}}>
          Created a modern e-commerce experience with a design inspired by
          Amazon and Flipkart. (username: rahul Password: rahul@2021)
        </TechnologiesUsed>
        <ul>
          <li style={{marginBottom: '5px'}}>
            Implemented pages for Login, Products, and Product details with
            React Router, React components, and form inputs.
          </li>
          <li style={{marginBottom: '5px'}}>
            Secured user data with JWT tokens, REST API calls, and local
            storage.
          </li>
        </ul>
      </TechnologiesUsedContainer>

      <ProjectHadingContainer>
        <div>
          <ProjectHeading>Tasty Kitchens (Swiggy/Zomato Clone)</ProjectHeading>
        </div>
        <div>
          <p>
            <a
              href="https://jagadeeshkmrapp.ccbp.tech/login"
              target="_blank"
              rel="noreferrer"
            >
              Project3 Link
            </a>
          </p>
        </div>
      </ProjectHadingContainer>
      <TechnologiesUsedContainer>
        <TechnologiesUsed>
          <TechSpan>Technologies used:</TechSpan> HTML, CSS, JavaScript, React
          JS, Bootstrap, React Slick, Figma, client storage. <br />
        </TechnologiesUsed>
        <TechnologiesUsed style={{marginTop: '20px'}}>
          Constructed an engaging Online Food Ordering Service akin to
          Swiggy/Zomato, enabling users to discover top restaurants, obtain
          in-depth restaurant details, manage their cart, and process payments.
          (username: rahul Password: rahul@2021)
        </TechnologiesUsed>
        <ul>
          <li style={{marginBottom: '5px'}}>
            Set up unique routes for features such as login, home screen,
            individual restaurant data, and cart management using React Router
            components (Route, Switch, Link).
          </li>
          <li style={{marginBottom: '5px'}}>
            Incorporated a fluid horizontal scrolling capability (carousel
            images) on the home screen with the help of the React Slick library.
          </li>
          <li style={{marginBottom: '5px'}}>
            Developed visually striking and exact React components by following
            Figma mockups and using REST APIs to fetch popular restaurants and
            specific restaurant information.
          </li>
        </ul>
      </TechnologiesUsedContainer>
    </ProjectsBgContainer>
  </>
)

export default Projects
