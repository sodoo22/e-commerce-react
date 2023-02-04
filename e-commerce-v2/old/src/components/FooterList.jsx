import { useState } from "react"
import { Link } from "react-router-dom"


export default function FooterList(props) {
    // const [list, setList] = useState()
    // console.log(FindData)
    return (
        <div className="footerList">
            <h3>Find product</h3>
            <ul>
                {props.FindData.map((data, index) => {
                    return (
                        <li key={index} className="my-3">
                            <Link >{data.ul}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}