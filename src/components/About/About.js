import React, { useContext } from "react"
import { Image, Center } from "@chakra-ui/react"
import { Context } from "../../context/Context"
import Loader from "../Loader/Loader"
import Bat from "../../assets/logo/bat.svg"

const About = () => {
    const {about, isAboutLoading} = useContext(Context)

    if (isAboutLoading) {
        return <Loader />
    }

    const { aboutTitle, aboutContent, aboutImage } = about
    
    return (
        <>
        <section className="about" id="about">
            <div className="row">
                <div className="column">
                    <h2 className="titleText">{aboutTitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: aboutContent}}/>
                </div>
                <div className="column">
                    <div className="imgWrap">
                        <img src={aboutImage} alt={aboutTitle} />
                    </div>
                </div>
            </div>
        </section>
        <Center bg="rgba(18, 18, 26,1)" >
            <Image src={Bat} alt="If your a bat, Im a bat." />
        </Center>
        </>
    )
}

export default About