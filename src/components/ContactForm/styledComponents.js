/*
Hex: #4c63b6
Hex: #475569
Hex: #1e293b
Hex: #ffffff
Hex: #334155
Hex: #d8d8d8
Hex: #aab8c8
Hex: #cbd5e1
*/

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-top: 60px;
  padding-bottom: 60px;
  background-size: cover;
`
export const NotesH1 = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 40px;
  font-weight: 500;
`
export const NotesInputForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid #ccd8e4;
  width: 580px;
  height: 650px;
  margin-top: 30px;
  margin-bottom: 60px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 7px;
`

export const Label = styled.label`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 114%;
  margin-top: 30px;
`

export const TitleInput = styled.input`
  width: 497px;
  height: 48px;
  flex-shrink: 0;
  margin: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #aab8c8;
  color: #ffffff;
  background: transparent;
  -webkit-appearance: none;
  padding: 0px;
  outline: none;
`

export const CommentTextInput = styled.textarea`
  border: 1px solid #aab8c8;
  background-color: transparent;
  margin-top: 10px;
  padding: 10px 10px;
  height: 250px;
  border-radius: 3px;
`

export const SendButton = styled.button`
  color: #ffffff;
  background-color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  align-self: center;
  border: none;
  padding: 10px 16px;
  margin-top: 40px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const ContactList = styled.ul`
  display: flex;
  padding-left: 0;
  list-style-type: none;
  width: 700px;
  margin-top: 80px;
  flex-wrap: wrap;
`
export const EmptyNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`

export const EmptyNotesH1 = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
`

export const EmptyNotesP = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`
export const EmptyImage = styled.img`
  width: 80px;
  height: 80px;
`
