import React from 'react'
import styles from './Menu.module.scss';
import home from 'assets/icones/home-ativo.png'
import maisCurtidas from 'assets/icones/mais-curtidas-inativo.png'
import maisVistas from 'assets/icones/mais-vistas-inativo.png'
import novidades from 'assets/icones/novas-inativo.png'
import surpreendaMe from 'assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/"> Home </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="" />
                    <a href="/"> Mais curtidas </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="" />
                    <a href="/"> Mais vistas </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novidades} alt="" />
                    <a href="/"> Novidades </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="" />
                    <a href="/"> Surpreenda-me </a>
                </li>
            </ul>
        </nav>
    );
}