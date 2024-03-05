import styles from './styles.module.css'

import ignaiteLogo from '../assets/ignaite-logo.svg'

export function Header () {
  return (
    <header className={styles.header}>
      <img src={ignaiteLogo} alt="Logotipo Ignaite" />
    </header>
  );
}