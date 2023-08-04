import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {

    const iconsSize = 24;
    const iconColor = 'white';

    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li>
                    <a href="/"><BsFacebook size={iconsSize} color={iconColor} /></a>
                </li>
                <li>
                    <a href="/"><BsTwitter size={iconsSize} color={iconColor} /></a>
                </li>
                <li>
                    <a href="/"><BsInstagram size={iconsSize} color={iconColor} /></a>
                </li>
            </ul>

            <p className={styles.footer__text}>Desenvolvido por Alura.</p>
        </footer>
    );
}

export default Footer;
