import SkillsCard from "../skillsCard"
import Skills from ".."
import htmlImg from "../../../../assets/html-icon.png"
import cssImg from "../../../../assets/css-icon.png"
import jsImg from "../../../../assets/js-icon.png"
import reactImg from "../../../../assets/react-icon.png"
import sassImg from "../../../../assets/sass-icon.svg"
import figmaImg from "../../../../assets/figma-icon.svg"
import tsImg from "../../../../assets/ts-icon.svg"

const SkillsList = () => {
    return(
        <>
         <Skills>
         <SkillsCard image={htmlImg} title={"HTML"}/>
         <SkillsCard image={cssImg} title={"CSS"}/>
         <SkillsCard image={jsImg} title={"JavaScript"}/>
         <SkillsCard image={reactImg} title={"React"}/>
         <SkillsCard image={sassImg} title={"Sass"}/>
         <SkillsCard image={figmaImg} title={"Figma"}/>
         <SkillsCard image={tsImg} title={"TypeScript"}/>
         </Skills>
        </>
    )
}

export default SkillsList