import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou James!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do James sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor de Full-Stack e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha Historia na programação começou quando eu ainda estudava no curso de farmácia da UFC, mas que por ventura do destíno tive o prazer de conhecer uma pessoa que me ofereceu uma oportunidade de conhecer mais sobre a área de desenvolvimento e programação.
            </p>
            <p className={styles.paragrafo}>
                Comecei com um Boot-Camp do Banco PAN na DIO, que ensínava os sobre o desenvolvimento back-end com JAVA.
            </p>
            <p className={styles.paragrafo}>
                Depois disso, continuei meu estudos arduamente, e descidi conhecer o desenvolvimento front-end, que eu havia grande curiosidade de saber como funcinava.
                Felizmente tive uma oportunidade de estudar na ALURA, com a bolsa de estudos da ALURA+ORACLE, e me encantei cada vez mais com o desenvolvimento de programas num todo.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Tenho trilhado meu caminho arduamente, e atualmente curso Análise e Desenvolvimento de Sistemas na Unichristos, assim rumo a me tornar um profissional completo.
            </p>
        </PostModelo>
    )
}