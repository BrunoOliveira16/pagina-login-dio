import { Container, Title, TitleHighLight, Column } from './styles';
import { UserInfo} from '../../components/UserInfo';
import { Card } from '../../components/Card';

const Feed = () => {
  return (
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighLight># RANKING DA SEMANA</TitleHighLight>
        <UserInfo percentual={100} nome={"Bruno Oliveira"} xp={'XP ' + ((100*7280)/100) + ' / 7280'} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
        <UserInfo percentual={80} nome={"Bruno Oliveira"} xp={'XP ' + ((80*7280)/100) + ' / 7280'} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
        <UserInfo percentual={75} nome={"Bruno Oliveira"} xp={'XP ' + ((75*7280)/100) + ' / 7280'} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
        <UserInfo percentual={65} nome={"Bruno Oliveira"} xp={'XP ' + ((65*7280)/100) + ' / 7280'} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
        <UserInfo percentual={60} nome={"Bruno Oliveira"} xp={'XP ' + ((60*7280)/100) + ' / 7280'} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
      </Column>
    </Container>
  );
};

export default Feed;