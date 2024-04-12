import styles from "./index.module.scss"

const Menu = ({ Click }) => {
    return (
        <div role="dialog" className={styles.menuContainer}>
            <h1 className="title1" >Bem vindo ao meu Portifólio</h1>
            <nav>
                <a href="#contacts" onClick={() => Click()} className="paragraph" id={styles.contactButton}>Contatos</a>
                <button className="paragraph" id={styles.contactButton}>Dowload CV</button>
                <a href="#projects" onClick={() => Click()} className="paragraph" id={styles.contactButton} >Projetos</a>
            </nav>

        </div>
    )
}

export default Menu