import {Link} from 'react-router-dom'

import {
  ListItem,
  ContactListContainer,
  Text,
  MsgText,
  HomeBtnContainer,
  HomeButton,
} from './styledComponents'

const ContactInfo = props => {
  const {contactLists} = props
  const {name, email, message} = contactLists
  return (
    <>
      <ListItem>
        <ContactListContainer>
          <Text>NAME: {name}</Text>
          <Text>EMAIL: {email}</Text>
          <MsgText>MESSAGE: {message}</MsgText>
          <Link to="/">
            <HomeBtnContainer>
              <HomeButton type="button">Bact To Profile</HomeButton>
            </HomeBtnContainer>
          </Link>
        </ContactListContainer>
      </ListItem>
    </>
  )
}

export default ContactInfo
