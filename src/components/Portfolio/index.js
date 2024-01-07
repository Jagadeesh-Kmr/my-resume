import {Link} from 'react-router-dom'

import {
  BgContainer,
  Image,
  Name,
  Bio,
  Education,
  EducationDetails,
  EducationYear,
  CollegeDetails,
  HrLine,
  BioLine,
  BioContent,
  ContactDetailsContainer,
  ContactHd,
  DetailsContainer,
  Button,
  BtnContainer,
  UlList,
  ListTypes,
  SkillsProjects,
} from './styledComponents'

const Portfolio = () => (
  <>
    <BgContainer>
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Default_avatar_profile.jpg/480px-Default_avatar_profile.jpg"
          alt="profile"
        />
        <Name className="profile-name">T N Jagadeesh Kumar</Name>
        <Bio>
          <HrLine />
          <span>
            <Education>Education</Education>
          </span>
          <EducationDetails>
            <CollegeDetails>
              N.B.K.R science & arts College, Vidyanagar/Nellore
            </CollegeDetails>
            <br />B Com (69.7%) <EducationYear> 2017 - 2020 </EducationYear>
          </EducationDetails>
          <HrLine />
        </Bio>
        <BioLine>
          <Bio>Bio</Bio>
          <BioContent>An Aspiring Frontend Developer</BioContent>
        </BioLine>
      </div>

      <ContactDetailsContainer>
        <ContactHd>
          Linkedin:{' '}
          <a
            className="visit-anchor"
            href=" https://www.linkedin.com/in/jagadeesh-kumar-553788213/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/jagadeesh-kumar-553788213/
          </a>
        </ContactHd>
        <ContactHd>Phone no: 8125008885</ContactHd>
        <ContactHd>
          Email:
          <a href="jagadeesh.1724@gmail.com" target="_blank" rel="noreferrer">
            jagadeesh.1724@gmail.com
          </a>
        </ContactHd>
        <BtnContainer>
          <Link to="/contact">
            <Button type="button">Click To Add Contacts</Button>
          </Link>
        </BtnContainer>
        <HrLine />

        <DetailsContainer>
          <SkillsProjects>Skills</SkillsProjects>
          <UlList>
            <ListTypes>HTML</ListTypes>
            <ListTypes>CSS</ListTypes>
            <ListTypes>Bootstrap</ListTypes>
            <ListTypes>JavaScript</ListTypes>
            <ListTypes>React.js</ListTypes>
            <ListTypes>Figma</ListTypes>
          </UlList>
        </DetailsContainer>
        <BtnContainer>
          <Link to="/skills">
            <Button type="button">Click To View Skills</Button>
          </Link>
        </BtnContainer>
        <HrLine />

        <DetailsContainer>
          <SkillsProjects>Projects</SkillsProjects>
          <UlList>
            <ListTypes>Jobby App</ListTypes>
            <ListTypes>Nxt Trendz</ListTypes>
            <ListTypes>Tasty Kitchens</ListTypes>
          </UlList>
        </DetailsContainer>
        <BtnContainer>
          <Link to="/project">
            <Button type="button">Click To View Projects</Button>
          </Link>
        </BtnContainer>
      </ContactDetailsContainer>
    </BgContainer>
  </>
)

export default Portfolio
