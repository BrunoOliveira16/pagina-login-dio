import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

// Images
import logo from '../../assets/logo.svg';

// Styles
import { 
    Container, 
    Row, 
    Wrapper, 
    BuscarInputContainer, 
    Menu, 
    MenuRight,
    MenuHighLight, 
    UserPicture, 
    Input,
    IconContainer 
} from './styles';

//Components
import { Button } from '../Button';

const Header = ({ autenticado, lefIcon }) => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickRegister = () => {
        navigate('/register')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={ logo } alt='Logo da DIO'/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <IconContainer>
                                <GoSearch />
                            </IconContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        <Menu>Vagas</Menu>
                        <Menu>Artigos</Menu>
                        <Menu>Rooms</Menu>
                        <MenuHighLight>Seja Global</MenuHighLight>
                    </>
                ) : null }
            </Row>
            <Row>
                {autenticado ? (
                    <>
                        <UserPicture src='https://avatars.githubusercontent.com/u/103857382?v=4' />
                    </>
                ) : (
                    <>
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="cadastrar" onClick={handleClickRegister}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  );
};

export { Header };