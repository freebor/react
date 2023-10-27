import ShowAbout from "../../component/about-section/ShowAbout"
import TopHeader from "../../component/Header/BottomHeader"
import Client from "../../component/Client"
import Footer from "../../component/footer/Footer"
const About =()=>{
    return(
        <>
            <TopHeader 
                BgsmallColor={'bg-gray'}
            />
            <ShowAbout />
            <Client />
            <Footer />
        </>
    )
}

export default About