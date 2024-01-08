import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  width: 900px;
  margin-top: 20px;
  list-style-type: none;
  padding: 10px;
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    width: 450px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ContactListContainer = styled.div`
  color: #121212;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const Text = styled.p`
  width: 700px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 350px;
  }
`

export const MsgText = styled.p`
  width: 500px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 350px;
  }
`

export const HomeBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeButton = styled.button`
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
