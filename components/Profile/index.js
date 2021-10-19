import {Container, Area, Avatar, ProfileAbout} from './styles';
import Image from 'next/image';
import { motion } from "framer-motion";

const Profile = () => {
  return(
    <Container>
      <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ delay: 2, duration: 1 }}
      >
      <Area>
      <Avatar>
        <img src="/images/avatar_novo.jpg" alt="Hamilton Ramos"/>
      </Avatar>
      <ProfileAbout>
        <h4>Hamilton José Teixeira Ramos</h4>
        <p>Advogado, graduado em Direito pela Estácio de Sá, Especialista em Direito Publico pela UNIFACS, membro da Comissão de Direito do Consumidor OAB/MS, atuante em todo brasil.</p>
      </ProfileAbout>
      </Area>
      </motion.div>
    </Container>
  )
}

export default Profile;