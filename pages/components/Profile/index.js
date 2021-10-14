import * as C from './styles';
import Image from 'next/image';

const Profile = () => {
  return(
    <C.Container>
      <C.Area>
      <C.Avatar>
        <Image src="/images/hamilton-ramos-avatar.jpeg" alt="Hamilton Ramos" width={150} height={150}/>
      </C.Avatar>
      <C.ProfileAbout>
        <h4>Hamilton José Teixeira Ramos</h4>
        <p>Advogado, graduado em Direito pela Estácio de Sá, Especialista em Direito Publico pela UNIFACS, atuante em direito do consumidor, empresarial & eleitoral.</p>
      </C.ProfileAbout>
      </C.Area>
    </C.Container>
  )
}

export default Profile;