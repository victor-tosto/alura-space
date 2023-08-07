import Tags from "../Tags";
import Cards from "./Cards";
import styles from './Gallery.module.scss';
import pics from './pics.json';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2 className={styles.gallery__title}>Navegue pela galeria</h2>
            <Tags />
            <Cards itens={pics} styles={styles}/>
        </section>
    );
}

export default Gallery;
