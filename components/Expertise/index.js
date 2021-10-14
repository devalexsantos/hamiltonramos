import { Container, AreaButtons, Buttons} from './styles';

const Expertise = ()=> {
  return(
    <Container>
      <h2>Áreas de Atuação</h2>
      <AreaButtons>
        <Buttons>
          Civil
        </Buttons>
        <Buttons>
          Consumidor
        </Buttons>
        <Buttons>
          Administrativo
        </Buttons>
        <Buttons>
          Eleitoral
        </Buttons>
      </AreaButtons>
    </Container>
  )
}

export default Expertise;