import { QuickFoxArray } from "../../../utilities/mockData"
const QuickFoxTextCard = ()=>{
    const {header} = QuickFoxArray;
    return(
        <>
            <h5>{header}</h5> 
            <div className="quick-text-map">
                {QuickFoxArray.quickText.map((text)=>{
                    return(
                        <p key={text.id}>{text.text}</p>
                    )
                })}    
            </div>  

        </>
    )
}


    
export default QuickFoxTextCard
