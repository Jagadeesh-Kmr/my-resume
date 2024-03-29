import styled from 'styled-components'

export const SkillsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 30px;
  min-height: 100vh;
`
export const SkillsHeading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 0;
  align-self: flex-start;
`
export const SkillsHrLine = styled.hr`
  width: 1500px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const SkillsContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
`
export const HomeSkillsBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeSkillsButton = styled.button`
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
