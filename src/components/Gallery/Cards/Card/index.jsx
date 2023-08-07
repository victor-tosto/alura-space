import { MdFavoriteBorder } from 'react-icons/md';
import { FaExpandAlt } from 'react-icons/fa';

const Card = ({ item, styles }) => {
    return (
        <li className={styles.gallery__card}>
            <img className={styles.gallery__image} src={item.imagem} alt={item.titulo} />
            <div className={styles.gallery__description}>
                <div className={styles.gallery__info}>
                    <p className={styles.gallery__name}>{item.titulo}</p>
                    <p className={styles.gallery__credits}>{item.creditos}</p>
                </div>
                <span className={styles.gallery__btn}>
                    <MdFavoriteBorder className={styles.gallery__fav} size={25} />
                    <FaExpandAlt className={styles.gallery__expand} size={25} />
                </span>
            </div>
        </li>
    );
}

export default Card;
