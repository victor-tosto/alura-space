import Tags from "../Tags";
import styles from './Gallery.module.scss';
import pics from './pics.json';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaExpandAlt } from 'react-icons/fa';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2 className={styles.gallery__title}>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.gallery__list}>
                {pics.map((pic) => {
                    return (
                        <li key={pic.id} className={styles.gallery__card}>
                            <img className={styles.gallery__image} src={pic.imagem} alt={pic.titulo} />
                            <div className={styles.gallery__description}>
                                <div className={styles.gallery__info}>
                                    <p className={styles.gallery__name}>{pic.titulo}</p>
                                    <p className={styles.gallery__credits}>{pic.creditos}</p>
                                </div>
                                <span className={styles.gallery__btn}>
                                    <MdFavoriteBorder className={styles.gallery__fav} size={25} />
                                    <FaExpandAlt className={styles.gallery__expand} size={25} />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Gallery;
