// == Base:
import React, { useState } from "react"
// == Styles:
import './Paginator.scss'

const Paginator = ({ totalItemsCount, userSize, pageSize = 10, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalItemsCount / userSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / pageSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let prevSide = (portionNumber - 1) * pageSize + 1
    let nextSide = portionNumber * pageSize

    return (
        <ul className="paginator">
            {
                portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}
            {pages.filter(page => page >= prevSide && page <= nextSide)
                .map(page => {
                    return <li key={page}
                        onClick={() => onPageChanged(page)}
                        className={currentPage === page ? "paginator-active" : "paginator"}>
                        {page}
                    </li>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>
            }
        </ul>
    )
}

export default Paginator