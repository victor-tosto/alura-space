import styles from './Tags.module.scss';

const Tags = () => {
    return (
        <div className={styles.tags}>
            <p className={styles.tags__text}>Busque por tags:</p>
            <ul className={styles.tags__list}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    );
}

export default Tags;
