import Banner from "../../components/banner"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { useState } from "react"
import ProjectsList from "../../components/sections/projects/projectsList"


const HomePage = () => {
    const [openModal, setOpenModal] = useState(false)

    const Click = () =>{
        {openModal ? setOpenModal(false) : setOpenModal(true)}
    }


    return (
        <>
            <Header Click={Click} openModal={openModal} />
            {openModal? <Menu Click={Click} /> : <></> }
            <Banner />
            <ProjectsList/>
            <Footer />
        </>
    )
}

export default HomePage