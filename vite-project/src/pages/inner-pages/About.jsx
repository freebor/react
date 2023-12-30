import ShowAbout from "../../component/about-section/ShowAbout"
import BottomHeader from "../../component/Header/BottomHeader"
import Footer from "../../component/footer/Footer"
const About = () =>{
    return(
        <>
            <BottomHeader 
                BgsmallColor={'bg-gray'}
                showLoginButton = {true}
                hideLink = {'hide-link'}
            />
            <ShowAbout />
            <Footer />
        </>
    )
}

export default About