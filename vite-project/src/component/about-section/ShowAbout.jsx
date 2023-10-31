import AboutBanner from "./AboutBanner"
import ProbTry from "./ProbTry"
import Companies from "./Companies"
import Team from "./team/Team"
import Video from "./Video"
import Metrix from "./Metrix"
import Work from "./Work"

const ShowAbout =()=>{
    return(
        <>
            <AboutBanner />
            <ProbTry />
            <Metrix />
            <Video />
            <Team />
            <Companies />   
            <Work />
        </>
    )
}

export default ShowAbout