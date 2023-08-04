import homeAtiva from '../../assets/icons/home-ativo.svg';
import vistasInativa from '../../assets/icons/views-inativo.svg';
import curitdasInativa from '../../assets/icons/curtidas-inativo.svg';
import novasInativa from '../../assets/icons/novas-inativo.svg';
import surpreendaInativa from '../../assets/icons/surpreenda-inativo.svg';
import styles from './Menu.module.scss';

const Menu = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={homeAtiva} alt="Home" />
                    <a className={[styles.item__link_active]} href="/">Início</a>
                </li>
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={vistasInativa} alt="Mais vistas" />
                    <a className={styles.item__link} href="/">Mais vistas</a>
                </li>
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={curitdasInativa} alt="Mais curtidas" />
                    <a className={styles.item__link} href="/">Mais curtidas</a>
                </li>
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={novasInativa} alt="Novas" />
                    <a className={styles.item__link} href="/">Novas</a>
                </li>
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={surpreendaInativa} alt="Surpreenda-me" />
                    <a className={styles.item__link} href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
