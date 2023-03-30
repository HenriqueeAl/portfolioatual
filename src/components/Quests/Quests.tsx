import { Quest } from '../Quest/Quest'
import styles from './Quests.module.scss'

interface Quests {
    colorborder: string;
    bgbox: string;
}

export const Quests = (props: Quests)=>{
    return (
        <section className={styles.quest}>
            <h3>Inoformaçoes</h3>
            <div>
                <Quest 
                colorborder={props.colorborder}
                bgbox={props.bgbox}
                name='Sobre' 
                text='Meu nome é Henrique, tenho 21 anos e sou apaixonado por tecnologia desde a infância. Em 2019, iniciei
                minha jornada na programação, começando com Python. No entanto, em 2020 decidi adentrar o mundo do
                desenvolvimento web e comecei a estudar HTML, CSS e JavaScript. Inicialmente, era mais um hobby, mas
                no início de 2022, decidi mergulhar de cabeça na área e focar nos estudos. Foi então que aprendi tecnologias
                como SASS, TypeScript, React, Next e Node, entre outras. Agora, em 2023, comecei a cursar Análise e Desenvolvimento
                de Sistemas em um curso superior. Estou animado para continuar minha jornada no mundo da tecnologia e contribuir
                com soluções inovadoras por meio do meu conhecimento.'>
                </Quest>
                <Quest 
                colorborder={props.colorborder}
                bgbox={props.bgbox}
                name='Poque deveria me contratar?'
                text='Uma das minhas principais características é o gosto pelo desafio. Quando sou desafiado, encontro motivação extra para aprender e superar obstáculos, não desisto facilmente. Essa determinação e perseverança me tornam uma pessoa flexível, capaz de me adaptar a novas situações e desafios, sempre buscando aprender mais e expandir meus conhecimentos.
                
                Outra habilidade que possuo é a capacidade de trabalhar em equipe. Entendo a importância da colaboração e da comunicação efetiva no sucesso de um projeto e, por isso, procuro sempre estar aberto a novas ideias e a trabalhar em conjunto com outras pessoas. Além disso, busco ser um bom ouvinte e contribuir com sugestões e soluções criativas para alcançar os objetivos em comum.'>
                </Quest>
            </div>
        </section> 
    )
}