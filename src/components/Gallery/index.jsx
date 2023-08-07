import { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from './Gallery.module.scss';
import pics from './pics.json';

const Gallery = () => {

    const [itens, setItens] = useState(pics);
    const tags = [...new Set(pics.map(tag => tag.tag))];

    const picsFilter = (tag) => {
        const newPics = pics.filter(pic => {
            return pic.tag === tag;
        });

        setItens(newPics);
    }

    return (
        <section className={styles.gallery}>
            <h2 className={styles.gallery__title}>Navegue pela galeria</h2>
            <Tags tags={tags} picsFilter={picsFilter} setItens={setItens} />
            <Cards itens={itens} styles={styles}/>
        </section>
    );
}

export default Gallery;
