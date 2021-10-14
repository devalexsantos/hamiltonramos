import {Container, Area, Avatar, ProfileAbout} from './styles';
import Image from 'next/image';

const Profile = () => {
  return(
    <Container>
      <Area>
      <Avatar>
        <img src="/images/hamilton-ramos-avatar.jpeg" alt="Hamilton Ramos"/>
      </Avatar>
      <ProfileAbout>
        <h4>Hamilton José Teixeira Ramos</h4>
        <p>Advogado, graduado em Direito pela Estácio de Sá, Especialista em Direito Publico pela UNIFACS, atuante em direito do consumidor, empresarial & eleitoral.</p>
      </ProfileAbout>
      </Area>
    </Container>
  )
}

export default Profile;