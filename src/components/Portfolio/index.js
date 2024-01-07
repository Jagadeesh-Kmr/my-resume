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
  SkillsDetailsContainer,
  Skills,
  Button,
  BtnContainer,
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
        <HrLine />
        <SkillsDetailsContainer>
          <Skills>Skills</Skills>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Figma</li>
          </ul>
        </SkillsDetailsContainer>
        <BtnContainer>
          <Link to="/skills">
            <Button type="button">Click To View Skills</Button>
          </Link>
        </BtnContainer>
        <HrLine />
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
