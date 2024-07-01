import React from 'react'
import "./SummaryBoard.scss"

const SummaryBoard = ({bgColor, title, count, icon}) => {
  return (
    <div className={`overview-box ${bgColor}`}>
        <span className="overview-icon --color-white">{icon}</span>
        <span className="overview-text">
            <p>{title}</p>
            <h3>{count}</h3>
        </span>

    </div>
  )
}

export default SummaryBoard;