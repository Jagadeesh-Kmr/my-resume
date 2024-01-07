/*
Hex: #64748b
Hex: #4f46e5
Hex: #f8fafc
Hex: #272727
Hex: #ffffff
Hex: #b6c5ff
Hex: #6366f1
Hex: #2c364c
Hex: #000000
Hex: #f1f5f9
Hex: #fbbf24
Hex: #202020
Hex: #cbd5e1
Hex: #7e858e
Hex: #121212
Hex: #475569
Hex: #ff0b37
*/

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
`
export const Name = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 0;
`

export const Image = styled.img`
  width: 160px;
  height: 160px;
`

export const Bio = styled.p`
  color: #272727;
  width: 480px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`
export const HrLine = styled.hr`
  width: 600px;
  margin-top: 40px;
  margin-bottom: 30px;
`

export const Education = styled.p`
  color: #272727;
  font-weight: 600;
  margin-top: 0;
`

export const CollegeDetails = styled.p`
  color: #2c364c;
  margin-bottom: 0;
`

export const EducationDetails = styled.div`
  font-family: 'Roboto';
  color: #202020;
  font-size: 20px;
  font-weight: 500;
`
export const EducationYear = styled.span`
  margin-left: 210px;
`
export const BioLine = styled.div`
  color: #272727;
  font-weight: 600;
  margin-top: 0;
`
export const BioContent = styled.p`
  color: #2c364c;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
`
export const ContactHd = styled.div`
  color: #272727;
  font-weight: 600;
  margin-top: 10px;
`

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  font-family: 'Roboto';
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
`
export const SkillsProjects = styled.p`
  color: #272727;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
`
export const UlList = styled.ul`
  display: flex;
`
export const ListTypes = styled.li`
  margin-right: 35px;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
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
`
