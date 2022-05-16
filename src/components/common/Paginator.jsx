// == Base:
import React from "react"
// == Styles:
import './Paginator.scss'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <ul className="paginator">
            {pages.map(page => {
                return <li key={page}
                    onClick={() => onPageChanged(page)}
                    className={currentPage === page ? "paginator-active" : "paginator"}>
                    {page}
                </li>
            })}
        </ul>
    )
}

export default Paginator