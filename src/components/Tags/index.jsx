import styles from './Tags.module.scss';
import pics from '../Gallery/pics.json';

const Tags = ({tags, picsFilter, setItens}) => {
    return (
        <div className={styles.tags}>
            <p className={styles.tags__text}>Busque por tags:</p>
            <ul className={styles.tags__list}>
                {tags.map(tag => {
                    return (
                        <li key={tag} onClick={() => picsFilter(tag)}>{tag}</li>
                    );
                })}
                <li onClick={() => setItens(pics)}>Todas</li>
            </ul>
        </div>
    );
}

export default Tags;
