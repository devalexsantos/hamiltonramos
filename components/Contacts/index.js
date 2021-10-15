import * as C from './styles';

export default function Contacts() {
  return (
    <C.Container>
      <h2>Contatos:</h2>
      <C.AreaButtons>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5571992030968&text=Ol%C3%A1%20Hamilton,%20quero%20uma%20consultoria" rel="noopener noreferrer"><C.Buttons><i className="fab fa-whatsapp"></i></C.Buttons></a>
        <a target="_blank" href="http://instagram.com/hamiltonramos.adv" rel="noopener noreferrer"><C.Buttons><i className="fab fa-instagram"></i></C.Buttons></a>
        <a target="_blank" href="https://br.linkedin.com/in/hamiltonramos" rel="noopener noreferrer"><C.Buttons><i className="fab fa-linkedin-in"></i></C.Buttons></a>
        <a target="_blank" href="https://www.google.com/maps?ll=-13.009798,-38.531191&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4132832807918269061" rel="noopener noreferrer"><C.Buttons><i className="fas fa-map-marked-alt"></i></C.Buttons></a>
      </C.AreaButtons>
    </C.Container>
  );
}