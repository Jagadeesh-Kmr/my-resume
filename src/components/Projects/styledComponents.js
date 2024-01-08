import styled from 'styled-components'

export const ProjectsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 30px;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 20px;
  }
`
export const MyProjects = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 0;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`
export const ProjectsHrLine = styled.hr`
  width: 1500px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 350px;
    margin-right: 100px;
  }
`
export const ProjectHadingContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-self: center;
  }
`

export const ProjectHeading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const TechnologiesUsedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TechnologiesUsed = styled.p`
  color: #272727;
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const TechSpan = styled.span`
  color: #272727;
  font-weight: 700;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export const HomeProjectBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeProjectButton = styled.button`
  color: #ffffff;
  background-color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 20px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export const LinkElement = styled.a`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-right: 30px;
  }
`
