import { useNavigate } from 'react-router-dom';

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
    UserPicture, 
    Input 
} from './styles';

//Components
import { Button } from '../Button';

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

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
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
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
                        <MenuRight href='/'>Home</MenuRight>
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