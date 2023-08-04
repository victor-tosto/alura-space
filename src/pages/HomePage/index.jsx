import banner from './banner.png';
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from '../../components/Footer';
import styles from './HomePage.module.scss';
import Gallery from '../../components/Gallery';

const HomePage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <aside className={styles.main__aside}>
                    <Menu />
                </aside>
                <section className={styles.main__banner}>
                    <h1 className={styles.banner__title}>A galeria mais completa de fotos do espaço!</h1>
                    <img className={styles.banner__image} src={banner} alt="Imagem da Terra vista do espaço" />
                </section>
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
