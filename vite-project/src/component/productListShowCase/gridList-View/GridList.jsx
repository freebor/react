import { useState } from "react"
import {gridImg , listImg} from "../../../utilities/image"
const GridList =()=>{
    const [dropdown, setDropdown] = useState(false)
    return(
        <section className="featured-container-wrap">
            <div className="grid-list-wrap">
                <div className="grid-list-header">
                    <p>Showing all 12 results</p>
                </div>
                <div className="grid-list-view">
                    <p>Views:</p>
                    <div className="grid-list-icon">
                        <div className="grid-icon"><img src={gridImg} alt="grid-icon" /></div>
                        <div className="list-icon"><img src={listImg} alt="list-icon" /></div>
                    </div>
                </div>
                <div className="grid-list-footer">
                    <div className="grid-list-dropdown-hold">
                        <button className="grid-list-dropdown" onClick={() => setDropdown(!dropdown)}>
                            <span>Popularity</span>
                            <i className={dropdown ? "fa-solid fa-chevron-down rot-arrow" : "fa-solid fa-chevron-down rot-arrow2"}></i>
                            <ul className={dropdown ? "show-dropdown" : "hide-dropdown"}>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </button>
                    </div>
                    <button className="grid-list-filter">Filter</button>
                </div>
            </div>
        </section>
    )
}
export default GridList