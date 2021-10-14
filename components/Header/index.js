import {Container, Area, Logo, ProfileBusiness} from './styles';

const Header = () => {
  return(
    <Container>
      <Area>
      <Logo>
        <img src="/images/logo_hamilton.png" alt="Logo Hamilton Ramos"/>
      </Logo>
      <ProfileBusiness>
      <h1><strong>HR Advocacia</strong> é um escritório que sempre busca um atendimento personalizado e acertivo ao cliente, com o objetivo primordial em assegurar um serviço transparente, criativo & Eficaz.</h1>
      </ProfileBusiness>
      </Area>
    </Container>
  )
}

export default Header;