import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactInfo from '../ContactInfo'

import {
  BgContainer,
  ContactH1,
  ContactInputForm,
  ContactInput,
  MessageInput,
  SendButton,
  ContactListUl,
  EmptyImage,
  EmptyMessageP,
  EmptyContactContainer,
  Label,
  ReqMsg,
} from './styledComponents'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [requiredDetails, setReqMsg] = useState('')
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

  const renderRequiredDetails = () => {
    setReqMsg('*Required Details')
  }

  const submitForm = e => {
    e.preventDefault()
    const contactList = {
      id: uuidv4(),
      name,
      email,
      message,
    }
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      renderRequiredDetails()
    } else {
      setContactList(prevState => [...prevState, contactList])
      setName('')
      setEmail('')
      setMessage('')
      setReqMsg('')
    }
  }

  const contactLength = contacts.length === 0

  return (
    <>
      <BgContainer>
        <ContactH1>Contact Form</ContactH1>
        <ContactInputForm onSubmit={submitForm}>
          <Label htmlFor="name">Name</Label>
          <ContactInput
            placeholder="enter name"
            type="text"
            id="name"
            value={name}
            onChange={onChangeName}
          />
          <Label htmlFor="email">Email</Label>
          <ContactInput
            placeholder="enter email"
            type="text"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
          <Label htmlFor="message">Message</Label>
          <MessageInput
            placeholder="enter your message"
            row="6"
            id="message"
            value={message}
            onChange={onChangeMessage}
          />
          <ReqMsg>{requiredDetails}</ReqMsg>
          <SendButton type="submit">Send</SendButton>
        </ContactInputForm>

        {contactLength ? (
          <EmptyContactContainer>
            <EmptyImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyMessageP>No Messages Yet</EmptyMessageP>
          </EmptyContactContainer>
        ) : (
          <ContactListUl>
            {contacts.map(eachList => (
              <ContactInfo key={eachList.id} contactLists={eachList} />
            ))}
          </ContactListUl>
        )}
      </BgContainer>
    </>
  )
}
export default ContactForm
