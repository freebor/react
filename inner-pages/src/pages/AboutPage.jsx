import Header from "../component/header/Header"
import Metrix from "../component/Metrix"
import ProbTry from "../component/problem-trying/ProbTry"
import Video from "../component/Video"
import Team from "../component/team/Team"
import Companies from "../component/client/Companies"
import Footer from "../component/footer/Footer"
const AboutPages =()=>{
    return(
        <>
            <Header />
            <ProbTry />
            <Metrix />
            <Video />
            <Team />
            <Companies />
            <Footer />
        </>
    )
}
export default AboutPages