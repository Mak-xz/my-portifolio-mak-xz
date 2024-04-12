
import SkillsList from "../sections/skills/skillsList"
import styles from "./index.module.scss"

const Banner = () => {
    return (
        <section>
            <div className={styles.bannerContainer}>
                <div>
                    <h3 className="label">Marks Souza</h3>
                    <h1 className="title1">Desenvolvedor Front-End</h1>
                    <h2 className="paragraph">Bem vindo ao meu portifólio</h2>
                    <a href="https://drive.google.com/uc?export=download&id=1wo5mX1hse8k9yI0AjBxvuT7nDU2gpH5j"> 
                    <button className="paragraph"  >Dowload CV</button> 
                    </a> 

                    <p className="paragraph">Olá, sou o Marks, Desenvolvedor Frontend, atuando na área coo freelancer nos  últimos 
                        7 meses. Estudando back-end, consumo de APIs REST e aprimorando minhas habilidades
                          na Kenzie Academy, onde também me formei como desenvolvedor Frontend 
                    </p>
                </div>
                <div className={styles.skillsContainer}>
                    <SkillsList/>
                </div>
            </div>
        </section>
    )
}

export default Banner