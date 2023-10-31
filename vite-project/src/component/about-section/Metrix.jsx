import { metrixArray } from "../../utilities/mockData"

const Metrix =()=>{
    return(
        <section className="metrix-container">
            {metrixArray.map((metrix, i)=>{
                return(
                    <div key={i} className="metrix-hold">
                        <p className="metrix-amount">{metrix.amount}</p>
                        <p className="metrix-title">{metrix.title}</p>
                    </div>
                )
            })}
        </section>
    )
}
export default Metrix