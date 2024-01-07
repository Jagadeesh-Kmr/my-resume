import {
  ListItem,
  NameAndCommentContainer,
  NameText,
  CommentText,
} from './styledComponents'

const ContactInfo = props => {
  const {contactLists} = props
  const {name, email, message} = contactLists
  return (
    <>
      <ListItem>
        <NameAndCommentContainer>
          <NameText>NAME: {name}</NameText>
          <CommentText>EMAIL:{email}</CommentText>
          <CommentText>MESSAGE:{message}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
    </>
  )
}

export default ContactInfo
