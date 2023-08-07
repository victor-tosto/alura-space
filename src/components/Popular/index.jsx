import styles from './Popular.module.scss';
import popular from './popularPics.json';

const Popular = () => {
    return (
        <section className={styles.popular}>
            <h2 className={styles.popular__title}>Populares</h2>
            <ul className={styles.popular__list}>
                {popular.map(pic => {
                    return (
                        <li key={pic.id} className={styles.popular__item}>
                            <img src={pic.path} alt={pic.alt} className={styles.popular__image}/>
                        </li>
                    );
                })}
            </ul>
            <button className={styles.popular__button}>
                Ver mais
            </button>
        </section>
    );
}

export default Popular;
