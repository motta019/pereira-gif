import styles from './Contato.module.css'
import contatoGif from '../assets/contato.gif'

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={contatoGif} alt="" className={styles.gif} />
      <button>Sobre</button>
      <button>Home</button>
    </div>
  )
}

export default Contato
