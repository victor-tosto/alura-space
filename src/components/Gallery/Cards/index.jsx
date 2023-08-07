import Card from "./Card";

const Cards = ({ itens, styles }) => {
    return (
        <ul className={styles.gallery__list}>
            {itens.map((item) => {
                return (
                    <Card key={item.id} item={item} styles={styles} />
                );
            })}
        </ul>
    );
}

export default Cards;
