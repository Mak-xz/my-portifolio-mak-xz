import styles from "./index.module.scss"

const Skills = ({ children }) => {
    return (
        <section id="skills">
            <div className={styles.skillsContainer}>
                <div>
                    {children}
                </div>

            </div>
        </section>
    )
}

export default Skills