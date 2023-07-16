import logo from './Space_Logo1.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img className={styles.cabecalho__imagem} src={logo} alt="Logo do Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text"
                placeholder="O que você procura?" />
                <img src={search} alt="Ícone de busca"/>
            </div>
        </header>
    )
}