import { QuickFoxArray } from "../../../utilities/mockData"
const QuickFoxListCard = ()=>{
    const {header} = QuickFoxArray;
    return(
        <>
            <div className="quickList">
                <h5>{header}</h5>
                {QuickFoxArray.quickList1.map((list)=>{
                    return(
                        <ul>
                            <li key={list.id}><i class="fa-solid fa-chevron-right"></i>{list.list}</li>
                        </ul>
                    )
                })}
            </div>
            <div className="quickList">
                <h5>{header}</h5>
                {QuickFoxArray.quickList1.slice(0, 3).map((list)=>{
                    return(
                        <ul>
                            <li key={list.id}><i class="fa-solid fa-chevron-right"></i>{list.list}</li>
                        </ul>
                    )
                })}
            </div>   
        </>
        )
    }
export default QuickFoxListCard