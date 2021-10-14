import { Container, AreaButtons, Buttons} from './styles';

const Expertise = ()=> {
  return(
    <Container>
      <h2>Áreas de Atuação</h2>
      <AreaButtons>
        <Buttons>
          <i className="fas fa-check"></i> Civil
        </Buttons>
        <Buttons>
          <i className="fas fa-check"></i>  Consumidor
        </Buttons>
        <Buttons>
          <i className="fas fa-check"></i> Administrativo
        </Buttons>
        <Buttons>
          <i className="fas fa-check"></i> Eleitoral
        </Buttons>
      </AreaButtons>
    </Container>
  )
}

export default Expertise;