import { Container, Title, TitleHighLight, TextContent, Wrapper } from './style';
import Banner from '../../assets/professional-challenges.png';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <TitleHighLight>
            Implemente
            <br /> 
          </TitleHighLight>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias mais utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
      </Wrapper>
      <div>
        <img src={Banner} alt="Imagem principal da página" />
      </div>
    </Container>
  );
};

export default Home;