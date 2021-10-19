import {Container, Area, Logo, ProfileBusiness} from './styles';
import { motion } from "framer-motion";
import Link from 'next/link';

const Header = () => {
  return(
    <Container>
      <Area>
      <Logo>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 1 }}
        >
        <img src="/images/logo_hamilton.png" alt="Logo Hamilton Ramos"/>
        </motion.div>
      </Logo>
      <ProfileBusiness>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ delay: 1, duration: 1 }}          
        >
      <h1><strong>HR Advocacia</strong> é um escritório que sempre busca um atendimento personalizado e acertivo ao cliente, com o objetivo primordial em assegurar um serviço transparente, criativo & Eficaz.</h1>
        </motion.div>
      </ProfileBusiness>
      </Area>
    </Container>
  )
}

export default Header;