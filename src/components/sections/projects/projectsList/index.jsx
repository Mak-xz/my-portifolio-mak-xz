import Projects from ".."
import ProjectsCard from "../projectsCard"
import gitImg from "../../../../assets/github.png"
import jornal01 from "../../../../assets/Jornal01.png"
import jornal02 from "../../../../assets/jornal03.png"
import msg01 from "../../../../assets/the-msg-01.png"
import msg02 from "../../../../assets/the-msg-02.png"
import ar01 from "../../../../assets/jr-ar-01.png"
import ar02 from "../../../../assets/jr-ar-02.png"
import gclose from "../../../../assets/git-close.png"

const ProjectsList = () => {
    return (
        <>
            <Projects>
                <ProjectsCard imageG={gitImg} linkG={"https://github.com/Mak-xz/The-Journal"} image={jornal01}
                    imageMob={jornal02} name={"The Journal( testes com API )"} link={"https://the-journal-makxz.vercel.app/"} />

                <ProjectsCard imageG={gitImg} linkG={"https://github.com/Mak-xz/CRUD-mak-xz"} image={msg01}
                    imageMob={msg02} name={"The MSG( CRUD )"} link={"https://crud-mak-i6ipoizjl-marks-projects-cea22b68.vercel.app/"} />

                <ProjectsCard imageG={gclose}  image={ar01}
                    imageMob={ar02} name={"Loja virtual (projeto real ativo)"} link={"https://www.jrarcondicionado.com.br/"} />

            </Projects>
        </>
    )
}

export default ProjectsList