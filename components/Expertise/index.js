import { Container, AreaButtons, Buttons} from './styles';
import { motion } from "framer-motion";

const Expertise = ()=> {

const itemList = {
    hidden: {y:20, opacity: 0},
    visible:  {y:0, opacity: 1},
};

const list = {
    visible: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
};

  return(
    <Container>
      <h2>Áreas de Atuação</h2>
      <AreaButtons>
      <motion.div initial="hidden" animate="visible" variants={list} style={{display: 'flex', flexWrap: 'wrap'}}>
      <motion.div variants={itemList}>
        <Buttons>
          <i className="fas fa-check"></i> Civil
        </Buttons>
      </motion.div>
      <motion.div variants={itemList}>  
        <Buttons>
          <i className="fas fa-check"></i>  Consumidor
        </Buttons>
      </motion.div>
      <motion.div variants={itemList}>
        <Buttons>
          <i className="fas fa-check"></i> Administrativo
        </Buttons>
      </motion.div>
      <motion.div variants={itemList}>
        <Buttons>
          <i className="fas fa-check"></i> Eleitoral
        </Buttons>
      </motion.div>
      </motion.div>
      </AreaButtons>
    </Container>
  )
}

export default Expertise;