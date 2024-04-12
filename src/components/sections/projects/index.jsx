import styles from "./index.module.scss"

const Projects = ({ children }) => {
    return (
        <section id="projects">
            <div className={styles.projectsContainer}>
            <div className={styles.gradient} >
            </div>
                <h2 className="title1">Projetos</h2>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Projects