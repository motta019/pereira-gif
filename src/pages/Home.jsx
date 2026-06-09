import { BrowserRouter, Link } from 'react-router-dom'
import styles from './Home.module.css'
import homeGif from '../assets/home.gif'
import Sobre from './Sobre'
import Contato from './Contato'

function Home() {
  return (
    
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGif} alt="" className={styles.gif}/>
       <BrowserRouter>
       
       <Link to ='/Sobre'>
       <button>Sobre</button>
       </Link>

       <link to='/Contato'>
       <button>Contato</button>
       </link>
       </BrowserRouter>
      </div>
  )
}

export default Home
