import styles from "./index.module.scss"
import React, { useState } from 'react';

const ProjectsCard = ({ imageG, image,imageMob, name, link, linkG }) => {
    const [showTag, setShowTag] = useState(false);

    const handleMouseEnter = () => {
        setShowTag(true);
    };

    const handleMouseLeave = () => {
        setShowTag(false);
    };

    return (
        <div className={styles.cardContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h3 className="title3">{name}</h3>
            <div className={styles.imgContainer}>
                <img src={image} alt="Project Image" />
            </div>
            <div className={styles.imgContainer01}>
                <img className={styles.ImgMob} src={imageMob} alt="Project Image" />
            </div>
            {showTag && (
                <div className={`${styles.showContainer} ${showTag ? styles.slideDown : ''}`}>
                    <a href={link} className={`paragraph ${styles.Button}`} target="_blank" rel="noreferrer">Saiba Mais</a>
                    <a href={linkG} target="_blank" rel="noreferrer">
                        <img src={imageG} className={styles.Git} alt="Git Image" />
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectsCard;
