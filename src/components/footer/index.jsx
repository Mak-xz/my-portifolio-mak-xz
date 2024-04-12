import WhatsImg from "../../assets/whatsapp-icon.svg"
import GitImg from "../../assets/git-icon.png"
import LinkeImg from "../../assets/in-icon.svg"
import MailImg from "../../assets/email-icon.svg"
import styles from "./index.module.scss"

const Footer = () => {
    return (
        <footer id="contacts" >
            <div className={styles.footerContainer} >
                <h2 className="title2">Contatos</h2>
                <div>
                    <a href="https://w.app/sWKkcZ" target="_blank">
                        <img src={WhatsImg} alt="WhatsApp" />
                    </a>

                    <a href="https://github.com/Mak-xz" target="_blank">
                        <img src={GitImg} alt="GitHub" />
                    </a>

                    <a href="linkedin.com/in/marks-rogério-738934237" target="_blank">
                        <img src={LinkeImg} alt="Linkedin" />
                    </a>

                    <a href="mailto:rogeriomarks5@gmail.com?subject=&body=" target="_blank">
                        <img src={MailImg} alt="Email" />
                    </a>

                </div>
                <h2 className="paragraph">Marks Rogério Souza Ribeiro - 2024</h2>
            </div>
        </footer>
    )
}

export default Footer