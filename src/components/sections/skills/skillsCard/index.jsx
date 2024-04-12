import styles from "./index.module.scss"


const SkillsCard = ({ image, title }) => {
    return (
        <div className={styles.cardContainer}>
            <img src={image} alt="Skill image" />
            <h3 className="title3">{title}</h3>
        </div>
    )
}

export default SkillsCard