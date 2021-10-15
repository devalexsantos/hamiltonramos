import {Container, Area, Avatar, ProfileAbout} from './styles';
import Image from 'next/image';

const Profile = () => {
  return(
    <Container>
      <Area>
      <Avatar>
        <img src="/images/avatar_novo.jpg" alt="Hamilton Ramos"/>
      </Avatar>
      <ProfileAbout>
        <h4>Hamilton José Teixeira Ramos</h4>
        <p>Advogado, graduado em Direito pela Estácio de Sá, Especialista em Direito Publico pela UNIFACS, membro da Comissão de Direito do Consumidor OAB/MS, atuante em todo brasil.</p>
      </ProfileAbout>
      </Area>
    </Container>
  )
}

export default Profile;