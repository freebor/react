import TeamUserCard from "./TeamUserCard"
import { teamArray } from "../../utilities/mockData"
const Team =()=>{
    const {teamHeader, teamText, teamUser} = teamArray
    return(
        <section className="container">
            <div className="team-wrap">
                <div className="team-text">
                    <h2>{teamHeader}</h2>
                    <p>{teamText}</p>
                </div>
                <div className="team-container">
                    {teamUser.map((teamCard)=>{
                        return(<TeamUserCard 
                            key={teamCard.image}
                            teamUserProp={teamCard}
                        />)
                    })}
                </div>
            </div>
        </section>
    )
}
export default Team

