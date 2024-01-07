import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactInfo from '../ContactInfo'

import {
  BgContainer,
  NotesH1,
  TitleInput,
  CommentTextInput,
  SendButton,
  NotesInputForm,
  ContactList,
  EmptyImage,
  EmptyNotesP,
  EmptyNotesH1,
  EmptyNotesContainer,
  Label,
} from './styledComponents'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [contacts, setContactList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangeMessage = event => {
    setMessage(event.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    const contactList = {
      id: uuidv4(),
      name,
      email,
      message,
    }

    setContactList(prevState => [...prevState, contactList])
    setName('')
    setEmail('')
    setMessage('')
  }

  const contactLength = contacts.length === 0

  return (
    <>
      <BgContainer>
        <NotesH1>Contact Form</NotesH1>
        <NotesInputForm onSubmit={submitForm}>
          <Label htmlFor="name">Name</Label>
          <TitleInput
            placeholder="enter name"
            type="text"
            id="name"
            value={name}
            onChange={onChangeName}
          />
          <Label htmlFor="email">Email</Label>
          <TitleInput
            placeholder="enter email"
            type="text"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
          <Label htmlFor="message">Message</Label>
          <CommentTextInput
            placeholder="enter your message"
            row="6"
            id="message"
            value={message}
            onChange={onChangeMessage}
          />
          <SendButton type="submit">Send</SendButton>
        </NotesInputForm>
        {contactLength ? (
          <EmptyNotesContainer>
            <EmptyImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesH1>No Notes Yet</EmptyNotesH1>
            <EmptyNotesP>Notes you add will appear here</EmptyNotesP>
          </EmptyNotesContainer>
        ) : (
          <ContactList>
            {contacts.map(eachList => (
              <ContactInfo key={eachList.id} contactLists={eachList} />
            ))}
          </ContactList>
        )}
      </BgContainer>
    </>
  )
}
export default ContactForm
