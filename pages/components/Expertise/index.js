import * as C from './styles';

const Expertise = ()=> {
  return(
    <C.Container>
      <h2>Áreas de Atuação</h2>
      <C.AreaButtons>
        <C.Buttons>
          Civil
        </C.Buttons>
        <C.Buttons>
          Consumidor
        </C.Buttons>
        <C.Buttons>
          Administrativo
        </C.Buttons>
        <C.Buttons>
          Eleitoral
        </C.Buttons>
      </C.AreaButtons>
    </C.Container>
  )
}

export default Expertise;