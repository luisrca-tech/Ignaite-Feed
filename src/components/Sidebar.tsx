import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import PerfilPhoto from '../assets/fotoaluno.jpeg'
import { Avatar } from './Avatar';

export function SideBar () {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src={PerfilPhoto}
         alt=''
        />
        <strong>Luis Felipe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}  />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}