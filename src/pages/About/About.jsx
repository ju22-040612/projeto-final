import aboutImagem from '../../assets/aboutImg.svg'
import styles from './about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
        <h2>
          Este projeto é o produto final dos estudos do Ciclo Formativo PretaLab - Módulo React.
        </h2>
        <img src={aboutImagem} />
      </div>
      <div className={styles.subtitulo}>
        <p>Para desenvolver este projeto aprendemos sobre HTML, CSS, javaScript. O projeto foi desenvolvido em React. Outras tecnologias usadas foram: Firebase, localStorage, reactJs, CSS Module, react-router-dom, Phosphor-icon.</p>
      </div>
      <div className={styles.containerSobre}>
        <div className={styles.tituloSobre}>
          Vem conhecer um pouquinho sobre como estou fazendo a minha migração de carreira:
          Minha primeira graduação é em Pedagogia e sou pós-graduada em Psicopedagogia Institucional. Também fiz cursos para especialização em Design Visual e UI. Mas minha vontade de estudar cada vez mais me trouxe para a programação. Meu primeiro contato foi em uma imersão junto a Alura. Em seguida me inscrevi para o Ciclo Formativo em Tecnologia da PretaLab, este é nosso último projeto.
        </div>  
      </div>
    </>
  )
}

export default About



