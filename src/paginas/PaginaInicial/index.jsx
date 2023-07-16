import banner from './banner.png';
import styles from './PaginaInicial.module.scss';

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from 'componentes/Rodape';
import Galeria from 'componentes/Galeria';
import Populares from 'componentes/Populares';

export default function PaginaInicial() {
    return (
        <>
        <Cabecalho />
        <main>
            <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>A galeria do espaço</h1>
                    <img src={banner} alt="O planeta terra visto do espaço" />
                </div>
            </section>
            <div className={styles.galeria}>
                <Galeria />
                <Populares />
            </div>
        </main>
        <Rodape />
        </>
    );
}