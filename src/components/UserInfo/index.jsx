import { Container, NameText, Progress, UserPicture, Experience } from './styles';

const UserInfo = ({ nome, image, percentual, xp}) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Experience>{xp}</Experience>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }