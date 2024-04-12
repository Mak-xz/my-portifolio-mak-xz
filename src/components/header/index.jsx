
import styles from "./index.module.scss"
import menuImg from "../../assets/menu.svg"
import closeImg from "../../assets/fechar.svg"
import imgGit from "../../assets/git-icon.png"
import imgIn from "../../assets/in-icon.svg"

const Header = ({ Click, openModal }) => {
    return (
        <header className={styles.headerBox}>
            <div className={styles.headerContainer}>
                <button onClick={() => Click()} >
                    {openModal ? <img src={closeImg} alt="fechar" /> : <img src={menuImg} alt="menu" />}
                </button>
                <div>
                    <a href="https://github.com/Mak-xz" target="_blank">
                        <img src={imgGit} alt="GitHub" />
                    </a>
                    <a href="linkedin.com/in/marks-rogério-738934237" target="_blank">
                        <img src={imgIn} alt="Linkedin" />
                    </a>
                    <a href="mailto:rogeriomarks5@gmail.com?subject=&body=" className="paragraph" id={styles.contactButton}>Contato</a>
                </div>

            </div>
        </header>
    )
}

export default Header