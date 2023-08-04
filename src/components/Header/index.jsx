import logo from './logo.svg';
import search from './search.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="search" placeholder="O que você procura?" />
                <img className={styles.header__search} src={search} alt="Ícone de busca" />
            </div>
        </header>
    );
}

export default Header;
