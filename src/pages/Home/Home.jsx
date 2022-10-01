import styles from './home.module.css'
import imgHome from '../../assets/imagemHome.svg'


function Home () {
    return (
        <div className={styles.header}>
            <h2>
                Meu nome é Juliana Gonçalves, sou estudante de Análise e Desenvolvimento de Sistemas.
            </h2>
            <img src={imgHome} />
        </div>
    )
}

export default Home