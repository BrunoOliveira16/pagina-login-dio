// Styles
import {
  Container, 
  Wrapper, 
  Row, 
  Column, 
  Title, 
  TitleLogin, 
  SubtitleLogin, 
  EsqueciText, 
  CriarText 
} from './styles';

// Pacotes React
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdEmail, MdLock } from 'react-icons/md';

// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

// Função HookForms
const schema = yup.object({
  email: yup.string().email('e-mail inválido ex: usuario@email.com').required('Campo Obrigatório'),
  password: yup.string().min(4, 'No minimo 4 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {

  const { control, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  console.log(errors, isValid);
  const onSubmit = data => console.log(data);

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/feed')
  };

  return (
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu Cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" leftIcon={<MdLock />} type="password" />
            <Button title="Entrar" variant="secondary" type="submit" onClick={handleClickSignIn}/>
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar senha</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  );
};

export default Login;